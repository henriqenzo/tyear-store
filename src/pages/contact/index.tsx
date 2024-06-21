import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Question } from "../../components/question"
import styles from './contact.module.css'


export const Contact = () => {

    const questions = [
        {
            id: 1,
            title: "Qual é o prazo de entrega?",
            text: "O prazo de entrega varia conforme a localização do destinatário: Capitais: 3 a 5 dias úteis | Regiões metropolitanas: 5 a 7 dias úteis | Outras localidades: 7 a 10 dias úteis"
        },
        {
            id: 2,
            title: "Como posso rastrear meu pedido?",
            text: "Após a confirmação do envio, você receberá um e-mail com o código de rastreamento e um link para acompanhar o status do seu pedido diretamente no site da transportadora."
        },
        {
            id: 3,
            title: "Posso trocar ou devolver um produto?",
            text: "Sim, aceitamos trocas e devoluções dentro de 30 dias a partir da data de entrega. O produto deve estar em sua embalagem original, sem sinais de uso e com todas as etiquetas anexadas. Para iniciar uma troca ou devolução, entre em contato com o nosso atendimento ao cliente pelo e-mail tyear@gmail.com.br ou pelo telefone (61) 94592-5772."
        },
        {
            id: 4,
            title: "Vocês oferecem frete grátis?",
            text: "Sim, oferecemos frete grátis para compras acima de R$ 200,00. Para compras abaixo desse valor, a taxa de frete será calculada no checkout."
        },
        {
            id: 5,
            title: "Posso alterar meu pedido após a confirmação?",
            text: "Após a confirmação do pedido, não podemos garantir a alteração de itens, mas faremos o possível para atender sua solicitação. Entre em contato com o nosso atendimento ao cliente o mais rápido possível para verificar a possibilidade."
        },
        {
            id: 6,
            title: "Os produtos são de alta qualidade?",
            text: "Sim, todos os nossos produtos são fabricados com materiais de alta qualidade e passam por rigorosos controles de qualidade para garantir a satisfação dos nossos clientes."
        },
        {
            id: 7,
            title: "Vocês fazem envios para fora do Brasil?",
            text: "No momento não fazemos envios internacionais."
        },
        {
            id: 8,
            title: "Fiz várias compras no mesmo dia, vocês podem enviar todas juntas?",
            text: "Uma vez que um pedido é confirmado, ele não pode ser modificado ou ajustado."
        },
        {
            id: 9,
            title: "Minha compra está voltando para o escritório TYEAR, e agora?",
            text: "Assim que a sua encomenda for devolvida ao nosso escritório, será cancelada e reembolsada em até 5 dias úteis, na mesma modalidade do pagamento do pedido. Não reenviamos pedidos."
        },
        {
            id: 10,
            title: "Recebi um produto com defeito, o que fazer?",
            text: "Entre em contato conosco pelo e-mail tyear@gmail.com.br com fotos detalhadas do produto em questão junto com o número do pedido."
        },
        {
            id: 11,
            title: "Em quanto tempo terei resposta da equipe de atendimento?",
            text: "Nosso time normalmente responde entre 1-3 dias úteis. O prazo de resposta pode aumentar dependendo de finais de semanas e feriados."
        },
    ]

    return (
        <>
            <Header />
            <div className={styles.content}>
                <div className={styles.text}>
                    <h5>PARA LOJA ONLINE / INFORMAÇÕES DO PEDIDO:</h5>
                    <h5 className={styles.email}>tyear@gmail.com.br</h5>
                    <h5>Horário de Atendimento:</h5>
                    <h5>Segunda a Sexta</h5>
                    <h5>11:00 - 18:00</h5>
                </div>
                <div className={styles.service}>
                    <h2>PERGUNTAS FREQUENTES</h2>
                    {questions.map((item) => 
                        <Question key={item.id} questionNumber={item.id} title={item.title} text={item.text}/>
                    )}
                </div>
            </div>
            <Footer />
        </> 
    )
}  
