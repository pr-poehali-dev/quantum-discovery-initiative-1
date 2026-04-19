import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Печать и гравировка",
    description: "Полноцветная печать, лазерная гравировка и тиснение на любых материалах — металл, дерево, пластик, кожа.",
    icon: "brain",
    badge: "Производство",
  },
  {
    title: "Корпоративный брендинг",
    description: "Нанесение логотипа, фирменных цветов и слогана компании на весь ассортимент продукции.",
    icon: "lock",
    badge: "Бренд",
  },
  {
    title: "Быстрые сроки",
    description: "Производство от 3 дней. Экспресс-заказы для срочных корпоративных мероприятий и праздников.",
    icon: "zap",
    badge: "Скорость",
  },
  {
    title: "Широкий ассортимент",
    description: "Более 500 позиций: кружки, ручки, блокноты, флешки, текстиль, упаковка и эксклюзивные изделия.",
    icon: "globe",
    badge: "Выбор",
  },
  {
    title: "Любой тираж",
    description: "Работаем от 1 штуки до 100 000 единиц. Выгодные цены при оптовых заказах от 50 штук.",
    icon: "target",
    badge: "Тираж",
  },
  {
    title: "Доставка по России",
    description: "Быстрая доставка в любой город России. Бережная упаковка и страхование каждого заказа.",
    icon: "link",
    badge: "Доставка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши возможности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный цикл производства сувенирной продукции — от идеи до готового изделия с вашим логотипом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}