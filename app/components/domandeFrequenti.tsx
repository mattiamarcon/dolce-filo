import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DomandeFrequenti() {
  const faqs = [
    {
      question: "Quanto tempo ci vuole per realizzare un prodotto personalizzato?",
      answer:
        "I tempi di produzione variano in base alla complessità del ricamo e al volume dell'ordine. In generale, per ordini standard i tempi di produzione sono di 3-5 giorni lavorativi. Per progetti più complessi o ordini di grandi quantità, potrebbe essere necessario più tempo. Ti forniremo sempre una stima precisa al momento dell'ordine.",
    },
    {
      question: "Posso fornire il mio design per il ricamo?",
      answer:
        "Assolutamente sì! Puoi inviarci il tuo design in formato vettoriale (.ai, .eps, .pdf) o in alta risoluzione (.jpg, .png). Il nostro team di design valuterà se è adatto al ricamo e, se necessario, ti suggerirà eventuali modifiche per ottenere il miglior risultato possibile.",
    },
    {
      question: "Quali sono le opzioni di personalizzazione disponibili?",
      answer:
        "Offriamo diverse opzioni di personalizzazione: scelta del colore del filato, posizionamento del ricamo, dimensioni e, naturalmente, il design stesso. Puoi anche scegliere tra diversi tipi di tessuti e modelli per i nostri prodotti. Per esigenze specifiche, non esitare a contattarci.",
    },
    {
      question: "È possibile ordinare un campione prima di effettuare un ordine più grande?",
      answer:
        "Sì, offriamo la possibilità di ordinare un campione prima di procedere con ordini più grandi. Il costo del campione verrà poi detratto dal prezzo totale dell'ordine finale se si procede con l'acquisto.",
    },
    {
      question: "Quali metodi di pagamento accettate?",
      answer:
        "Accettiamo pagamenti tramite carte di credito/debito (Visa, Mastercard, American Express), PayPal, bonifico bancario e contrassegno. Per ordini aziendali di grandi dimensioni, offriamo anche opzioni di pagamento rateizzato.",
    },
    {
      question: "Come posso prendermi cura dei miei prodotti ricamati?",
      answer:
        "Per mantenere la qualità del ricamo nel tempo, consigliamo di lavare i prodotti a basse temperature (30°C), preferibilmente al rovescio e senza candeggina. È meglio evitare l'asciugatrice e stirare i capi dal rovescio, evitando di passare il ferro direttamente sul ricamo.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-xl">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg ">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

