import {
  AlertTriangle,
  Bot,
  UserX,
  TrendingDown,
  UserMinus,
  Bug,
  Users,
  CreditCard,
} from "lucide-react";

const cards = [
  {
    Icon: AlertTriangle,
    color: "text-red-500 bg-red-50",
    text: "Your GHL automations are broken or barely working",
  },
  {
    Icon: Bot,
    color: "text-blue-500 bg-blue-50",
    text: "Your AI chatbot is giving wrong answers and losing leads",
  },
  {
    Icon: UserX,
    color: "text-purple-500 bg-purple-50",
    text: "You've hired VAs who don't actually know the platform",
  },
  {
    Icon: TrendingDown,
    color: "text-amber-500 bg-amber-50",
    text: "Your funnels aren't converting the way they should",
  },
  {
    Icon: UserMinus,
    color: "text-pink-500 bg-pink-50",
    text: "Clients are churning because your systems aren't reliable",
  },
  {
    Icon: Bug,
    color: "text-orange-500 bg-orange-50",
    text: "You're debugging workflows at 2am instead of growing",
  },
  {
    Icon: Users,
    color: "text-emerald-500 bg-emerald-50",
    text: "You can't take on new clients because fulfilment is maxed out",
  },
  {
    Icon: CreditCard,
    color: "text-teal-500 bg-teal-50",
    text: "You're paying for tools that don't work together",
  },
];

export default function PainGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* 8 BOXES - 4 + 4 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, color, text }, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${color} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-sm leading-5 text-slate-700">{text}</p>
            </div>
          ))}
        </div>

        {/* CENTER BLACK HEADING BOX */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-black p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
            You don&apos;t need another course. You need a team that{" "}
            <span className="text-green-400">builds,</span>{" "}
            <span className="text-blue-500">fixes,</span> and{" "}
            <span className="text-yellow-400">scales</span> everything for
            you.
          </h2>
        </div>
      </div>
    </section>
  );
}
