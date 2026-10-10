import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (!MONGODB_URI || MONGODB_URI.includes('<username>')) {
    const errorMsg = 'Please define a valid MONGODB_URI in your .env file.';
    console.error('❌ [MongoDB]', errorMsg);
    throw new Error(errorMsg);
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('🔄 [MongoDB] Connecting to database...');

    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((m) => {
        console.log(
          `✅ [MongoDB] Successfully connected to Database: "${m.connection.name}" on Host: "${m.connection.host}"`
        );
        return m;
      })
      .catch((err: unknown) => {
        cached.promise = null;
        const msg = err instanceof Error ? err.message : String(err);
        if (msg.includes('bad auth') || msg.includes('authentication failed')) {
          console.error(
            '❌ [MongoDB Auth Error] Authentication Failed! Check username and password in MONGODB_URI in .env.'
          );
        } else if (msg.includes('ETIMEDOUT') || msg.includes('whitelist') || msg.includes('ENOTFOUND')) {
          console.error(
            '❌ [MongoDB Network Error] Cannot reach cluster. Ensure 0.0.0.0/0 is added in MongoDB Atlas Network Access.'
          );
        } else {
          console.error('❌ [MongoDB Error]:', msg);
        }
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
