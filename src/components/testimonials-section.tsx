import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Ольга Смирнова",
    role: "Директор по маркетингу, ТехноГрупп",
    avatar: "/professional-woman-scientist.png",
    content:
      "Заказывали корпоративные подарки к Новому году — 500 наборов с логотипом. Качество отличное, сроки выдержали, партнёры были в восторге!",
  },
  {
    name: "Алексей Петров",
    role: "Руководитель HR, Сбербанк",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Уже третий год сотрудничаем. Оперативно, качественно, всегда помогут с выбором и дизайном. Лучший подрядчик по сувенирке!",
  },
  {
    name: "Мария Ким",
    role: "Бренд-менеджер, Aurora Retail",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Производим фирменный мерч для наших магазинов. Ребята взяли проект с нуля — от концепции до тиража. Очень профессиональный подход.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют компании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят наши клиенты о качестве продукции и сервисе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}