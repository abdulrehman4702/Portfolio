'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaInbox,
  FaEnvelope,
  FaTrash,
  FaCheck,
  FaSignOutAlt,
  FaSync,
  FaSearch,
  FaUser,
  FaCalendarAlt,
  FaShieldAlt,
} from 'react-icons/fa';

interface MessageItem {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: 'unread' | 'read';
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [stats, setStats] = useState({ total: 0, unread: 0 });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/messages');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
        setStats(data.stats || { total: 0, unread: 0 });
      }
    } catch (err) {
      console.error('Failed to fetch messages', err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleToggleStatus = async (id: string, currentStatus: 'unread' | 'read') => {
    const nextStatus = currentStatus === 'unread' ? 'read' : 'unread';
    setActionLoading(id);
    try {
      const res = await fetch('/api/admin/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) =>
          prev.map((m) => (m._id === id ? { ...m, status: nextStatus } : m))
        );
        setStats((prev) => ({
          ...prev,
          unread: nextStatus === 'read' ? prev.unread - 1 : prev.unread + 1,
        }));
      }
    } catch (err) {
      console.error('Status toggle failed', err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/messages?id=${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        const deletedMsg = messages.find((m) => m._id === id);
        setMessages((prev) => prev.filter((m) => m._id !== id));
        setStats((prev) => ({
          total: prev.total - 1,
          unread: deletedMsg?.status === 'unread' ? prev.unread - 1 : prev.unread,
        }));
      }
    } catch (err) {
      console.error('Delete failed', err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const filteredMessages = messages.filter((m) => {
    const matchesFilter = filter === 'all' || m.status === filter;
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.subject && m.subject.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
              <FaShieldAlt className="w-3 h-3 text-orange-500" />
              Super Admin Console
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Inquiries &amp; Messages Inbox
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Live contact and hire me submissions from your portfolio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchMessages}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all"
            >
              <FaSync className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/60 px-4 py-2.5 text-xs font-bold shadow-sm transition-all"
            >
              <FaSignOutAlt className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Inquiries
              </span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <FaInbox className="w-4 h-4" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              {stats.total}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unread Messages
              </span>
              <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-600">
                <FaEnvelope className="w-4 h-4" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-orange-600 mt-2">
              {stats.unread}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Processed / Read
              </span>
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600">
                <FaCheck className="w-4 h-4" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-teal-600 mt-2">
              {stats.total - stats.unread}
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8">
          <div className="flex items-center gap-2">
            {(['all', 'unread', 'read'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold capitalize transition-all ${
                  filter === tab
                    ? 'bg-slate-900 text-white dark:bg-orange-500 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {tab} {tab === 'unread' && stats.unread > 0 ? `(${stats.unread})` : ''}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
              <FaSearch className="w-3.5 h-3.5" />
            </span>
            <input
              type="text"
              placeholder="Search by name, email, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="mt-6 space-y-4">
          {loading ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
              Loading inquiries from database...
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500">
              <FaInbox className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-700 mb-2" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No messages found</p>
              <p className="text-xs text-slate-400 mt-0.5">
                New contact inquiries submitted on your portfolio will appear here.
              </p>
            </div>
          ) : (
            filteredMessages.map((msg) => {
              const isUnread = msg.status === 'unread';

              return (
                <div
                  key={msg._id}
                  className={`rounded-2xl sm:rounded-3xl border transition-all p-4 sm:p-6 md:p-7 ${
                    isUnread
                      ? 'bg-orange-50/30 dark:bg-orange-950/20 border-orange-300 dark:border-orange-500/40 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          <FaUser className="w-3.5 h-3.5 text-slate-400" />
                          {msg.name}
                        </span>

                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            isUnread
                              ? 'bg-orange-500 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {msg.status}
                        </span>

                        {msg.subject && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                            {msg.subject}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                        <a
                          href={`mailto:${msg.email}`}
                          className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400 hover:underline font-medium"
                        >
                          <FaEnvelope className="w-3 h-3" />
                          {msg.email}
                        </a>

                        <span className="flex items-center gap-1 text-slate-400">
                          <FaCalendarAlt className="w-3 h-3" />
                          {new Date(msg.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(msg._id, msg.status)}
                        disabled={actionLoading === msg._id}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                          isUnread
                            ? 'bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800'
                            : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        <FaCheck className="w-3 h-3" />
                        <span>{isUnread ? 'Mark Read' : 'Mark Unread'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(msg._id)}
                        disabled={actionLoading === msg._id}
                        className="p-2 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 border border-transparent hover:border-red-200 dark:hover:border-red-800 transition-colors"
                        title="Delete inquiry"
                      >
                        <FaTrash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
