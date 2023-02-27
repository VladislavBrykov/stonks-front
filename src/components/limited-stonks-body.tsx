import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Image from "next/image";


export const LimitedStonksBody = ()=>{
    return(
        <>
            <div id="simulateHero" className="l-row">
                <div className="l-block shortHeroVert">
                    <h1 className="c-white">Limited Stonks 30$/мес</h1>
                    <p className="c-white">
                        Доступ к закрытому телеграм каналу, торговля 24/7
                    </p>
                </div>
            </div>

            <div className="l-row b-white" id="LearnVerify">
                <div className="l-block l-npb">
                    <p className="l-eight l-push2 l-mb2">
                        Limited Stonks Telegram канал с прогнозами <strong>ГОТОВЫЕ ТОЧКИ ВХОДА!</strong> Сделку вы
                        ведете самостоятельно, программа не указывает стоп-лосс и тейк-профит для каждой сделки. Сделку
                        вы завершаете на свое усмотрение. Программа дает вам только точки входв.
                    </p>
                    <div className="l-six">
                        <h3 className="l-twelve l-nmr l-mb1 f-size48 f-l-height50">
                            ПРИБЫЛЬ <span className="d-block"></span>
                        </h3>
                        <p className="l-twelve l-nm f-size20 f-l-height26">
                            Мы гарантируем 90% прибыльных сделок. Программа оцениваете риски за вас, и просчитывает
                            движение цены.
                        </p>
                    </div>
                    <div className="l-six l-nm">
                        <h3 className="l-twelve l-nmr l-mb1 f-size48 f-l-height50">
                            РИСКИ <span className="d-block"></span>
                        </h3>
                        <p className="l-twelve l-nm f-size20 f-l-height26">
                            Вы получите рекомендации по риск-менеджменту. Простыми словами, как торговать, чтобы не
                            сливать деньги.
                        </p>
                    </div>
                    <div className="l-twelve t-center">
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/KL_4-UpMonitor_Cockpit.png"
                            />
                            <source type="image/jpeg" srcSet="/KL_4-UpMonitor_Cockpit.png"/>
                            <Image
                                src="/KL_4-UpMonitor_Cockpit.png"
                                alt="NinjaTrader"
                                loading="lazy"
                                width="716"
                                height="500"
                                // style="vertical-align: bottom"
                            />
                        </picture>
                    </div>
                </div>
            </div>

            <div className="l-row" id="Ecosystem">
                <div className="l-block">
                    <div className="l-four" id="ecosystemCTA">
                    </div>
                    <p className="l-five l-nmb c-white">
                        Тысячи людей торгуют по нашим прогнозам! Сотни заработали состояние на автоматизированной
                        торговле.
                    </p>
                    <Link
                        href="/automatic"
                        className="l-three l-nm t-center c-white eco"
                    >Автоматизированная</Link
                    >
                </div>
            </div>

            <div className="l-row b-white">
                <div className="l-block ffHero">
                    <div className="l-eight">
                        <h1 className="t-left l-m-mt1">Что вы получите</h1>
                        <p className="l-eleven t-left l-mb1">👉 Вы получаете уведомления в таком виде: </p>
                        <p className="l-eleven t-left l-mb1">***/USDT 🧪 LONG заходим 12.97</p>
                        <p className="l-eleven t-left l-mb1">***/USDT 🖍 SHORT заходим 89.44</p>
                        <p className="l-eleven t-left l-mb1">👉 Программа анализирует графики по следующим временным
                            интервалам: 1 min, 3 min, 5 min.</p>
                        <p className="l-eleven t-left l-mb1">👉 Бот работает круглосуточно.</p>
                        <p className="l-eleven t-left l-mb1">👉 Мониторинг графиков каждую минуту, поиск и анализ сложных
                            паттернов.</p>
                        <p className="l-eleven t-left l-mb1">👉 Анализ ведется по всем комбинациям с USDT/****.</p>
                        <p className="l-eleven t-left l-mb1">👉 Вы получите инструкции, как уменьшить комиссию при
                            торговле с 5% до 2.7%. Ваша торговля будет более продуктивной, сейчас у вас биржа по
                            стандарту забирает 5% при каждой торговой операции. Отдавая всего 2.7% вы на 25% чаще будете
                            закрываться в плюс.</p>
                        <p className="l-eleven t-left l-mb1">👉 Вы получите рекомендации по риск-менеджменту. Простыми
                            словами, как торговать, чтобы не сливать деньги. Мы научим вас торговать и даже убыточные
                            сделки всегда будут перекрываться прибылью.</p>
                        <p className="l-eleven t-left l-mb1">👉 У вас будет доступ ко всем обновлениям бота (анализ новых
                            паттернов, удаление малоэффективных), обновления вводятся 1-2 раза неделю.</p>
                        <p className="l-eleven t-left l-mb1">👉 Это идеальный вариант, если вы уже умеете торговать, но
                            хотите сэеономить время на поиск точек входа. Бот ведет сделки от начала и до конца. Вы
                            только повторяете и зарабатываете.</p>
                        <p className="l-eleven t-left l-mb1"></p>

                        <p className="t-left l-nmb">
                            <Link href="https://t.me/VladislavBrk" target="_self" className="redFlat l-left f-size32">Купить
                                за 30$ /мес</Link>
                        </p>
                        <p className="l-eleven t-left l-mb1"></p>

                        <p className="l-eleven t-left l-mb1"></p>

                        <p className="l-eleven t-left l-mb1">👉 Оплата производится в USDT. По реквизитам USDT (комиссия
                            1$) или Бинанс Pay (оплата без комиссии);</p>
                        <p className="l-eleven t-left l-mb1">👉 Оплату помогает произвести менеджер. Сразу после оплаты
                            вы получаете все необходимые доступы;</p>

                    </div>
                    <div className="l-four l-nmr">
                        <picture>
                            <source type="image/webp" srcSet="/Single_Angled-2.png"/>
                                <source type="image/jpeg" srcSet="/Single_Angled-2.png"/>
                                    <Image src="/Single_Angled-2.png" alt="Monitor" loading="eager" width="350"
                                         height="354"/>
                        </picture>
                    </div>
                </div>
            </div>

            <div className="l-row b-gray">
                <div className="l-block gsf">
                    <h2 className="l-twelve">Начните совершенно БЕСПЛАТНО</h2>
                    <div className="l-four t-center icon default">
                        <p className="t-base l-mb1">
                            Признанное лидерство <span className="d-block">среди трейдеров</span>
                        </p>
                    </div>
                    <div className="l-four t-center icon default">
                        <p className="t-base l-mb2">
                            90% прибыльных сделок
                            <span className="d-block">низкая маржа на фьючерсы</span>
                        </p>
                    </div>
                    <div className="l-four t-center l-nm icon default">

                        <p className="t-base l-mb2">
                            Уникальная возможность протестировать возможности бесплатно
                        </p>
                    </div>
                    <div className="l-twelve t-center">
                        <a
                            href="https://t.me/general_stonks"
                            className="redFlat translate f-size32 f-l-height32"
                        >ПОПРОБОВАТЬ БЕСПЛАТНО</a
                        >
                    </div>
                </div>
            </div>
        </>
    )
}