"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { goldPriceConfig, toPersianDigits } from "@/lib/gold";
import { viewportOnce } from "@/lib/motion";

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-panel rounded-xl px-4 py-3 text-xs">
      <p className="text-muted">{label}</p>
      <p className="mt-1 font-display text-sm text-gold-400">
        {toPersianDigits(payload[0].value)} تومان
      </p>
    </div>
  );
}

export default function GoldChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8 }}
      className="glass-panel rounded-2xl p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs text-muted">نرخ هر گرم طلای ۱۸ عیار</p>
          <p className="mt-1 font-display text-2xl text-gradient-gold sm:text-3xl">
            {toPersianDigits(goldPriceConfig.pricePerGram18k)} تومان
          </p>
        </div>
        <span className="rounded-full border border-gold-600/25 px-3 py-1 text-xs text-muted">
          به‌روزرسانی: {goldPriceConfig.lastUpdated}
        </span>
      </div>

      <div className="mt-6 h-56 w-full sm:h-64" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={goldPriceConfig.trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9a24c" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#c9a24c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,162,76,0.08)" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "#8c8371", fontSize: 11 }}
              axisLine={{ stroke: "rgba(201,162,76,0.15)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8c8371", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={0}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#c9a24c"
              strokeWidth={2}
              fill="url(#goldFill)"
              animationDuration={1400}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs leading-6 text-muted">
        نمودار روند هفتگی نرخ طلا صرفاً جهت آگاهی عمومی است. برای دریافت نرخ لحظه‌ای و نهایی، پیش از خرید با کارشناسان ما تماس بگیرید.
      </p>
    </motion.div>
  );
}
