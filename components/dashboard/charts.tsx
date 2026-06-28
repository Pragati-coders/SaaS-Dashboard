"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueSeries, subscriptions } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

const colors = ["#0ea5e9", "#10b981", "#f59e0b"];

export function RevenueChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueSeries}>
          <defs>
            <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.38} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} tickLine={false} axisLine={false} />
          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={3} fill="url(#revenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function GrowthChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueSeries}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="users" radius={[6, 6, 0, 0]} fill="#10b981" />
          <Bar dataKey="projects" radius={[6, 6, 0, 0]} fill="#0ea5e9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SubscriptionChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={subscriptions} dataKey="value" nameKey="name" innerRadius={62} outerRadius={96} paddingAngle={4}>
            {subscriptions.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
