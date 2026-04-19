import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какой минимальный тираж для заказа?",
      answer:
        "Мы работаем от 1 штуки — например, именные подарки с гравировкой. При оптовых заказах от 50 штук действуют скидки. Чем больше тираж, тем ниже цена единицы.",
    },
    {
      question: "Сколько времени занимает производство?",
      answer:
        "Стандартный срок — от 5 рабочих дней. Если нужно срочно, делаем экспресс-заказ за 2-3 дня. Точные сроки зависят от вида продукции и тиража.",
    },
    {
      question: "Можно ли нанести наш логотип на любой товар?",
      answer:
        "Да, мы наносим логотип и фирменный стиль на весь ассортимент. Используем полноцветную печать, лазерную гравировку, тиснение, вышивку — в зависимости от материала изделия.",
    },
    {
      question: "Вы разрабатываете дизайн или нужно прислать готовый?",
      answer:
        "Работаем в обоих вариантах. Можете прислать готовый макет или логотип — мы его адаптируем. Или закажите разработку дизайна с нуля у наших специалистов.",
    },
    {
      question: "Как осуществляется доставка?",
      answer:
        "Доставляем по всей России курьерскими службами СДЭК, Boxberry и Почтой России. Каждый заказ бережно упаковывается. Возможен самовывоз из нашего офиса.",
    },
    {
      question: "Можно ли получить образцы перед заказом тиража?",
      answer:
        "Да, для заказов от 200 штук мы изготавливаем подтверждающий образец, чтобы вы могли оценить качество перед запуском всего тиража.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о заказе, производстве и доставке сувенирной продукции.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}