import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Image from "next/image";


export const AutomaticBody = ()=>{
    return(
        <>
            <div id="simulateHero" className="l-row">
                <div className="l-block shortHeroVert">
                    <h1 className="c-white">Автоматизированная торговля 100$/мес</h1>
                </div>
            </div>
            <div className="l-row b-white" id="LearnVerify">
                <div className="l-block l-npb">
                    <p className="l-eight l-push2 l-mb2">
                        Stonks - торговая платформа, использующая квантовые компьютерные технологии и искусственный
                        интеллект. Сделки ведет программа самостоятельно. Вы не участвуете в процессе, но можете
                        наблюдать как увеличивается депозит вашего кошелька.
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
                            Программа настроена на анализ и применение риск менеджмента. Деньги вы никомк не переводите.
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
                        href="https://t.me/VladislavBrk"
                        className="l-three l-nm t-center c-white eco"
                    >Купить</Link
                    >
                </div>
            </div>

            <div className="l-row b-white">
                <div className="l-block ffHero">
                    <div className="l-eight">
                        <h1 className="t-left l-m-mt1">Что вы получите</h1>
                        <p className="l-eleven t-left l-mb1">👉 Подкключение через Бинанс API. Все ваши деньги остаются у
                            вас на счету.</p>
                        <p className="l-eleven t-left l-mb1"> 🧪Программа может тогровать вашим депозитом</p>
                        <p className="l-eleven t-left l-mb1"> 🧪У программы нет возможности вывести деньги (ограничено
                            самим бинансом)</p>
                        <p className="l-eleven t-left l-mb1"> 🧪Вы в режиме реального времени наблюдаете за всем что
                            происходит на вашем кошельке</p>
                        <p className="l-eleven t-left l-mb1">👉 Программное обеспечение позволяет анализировать десятки
                            сделок в секунду, зарабатывая вам деньги</p>
                        <p className="l-eleven t-left l-mb1">👉 Потенциал программы позволяет получать от 10% до 80%
                            ежедневной прибыли.</p>
                        <p className="l-eleven t-left l-mb1">👉 Вам предоставляется и сопровождение при настройке
                            программы</p>
                        <p className="l-eleven t-left l-mb1">👉 Вы можете выбрать, по каким паттернам торговать и
                            выставить уровень риска.</p>
                        <p className="l-eleven t-left l-mb1">👉 Вам предоставляется и сопровождение при настройке
                            программы</p>
                        <p className="l-eleven t-left l-mb1">👉 Идеальный вариант, если вы ходите увеличить свой депозит
                            без лишнего риска</p>
                        <p className="l-eleven t-left l-mb1">👉 Обязательно! На счету должно быть не менее 200$,
                            Желательно от 400$</p>
                        <p className="l-eleven t-left l-mb1">👉 Вы не передаете никакие пароли от своего аккаунта. Ваши
                            деньги в безопасности.</p>
                        <p className="l-eleven t-left l-mb1">👉 От вас потребуется Api Key (как его получить мы так же
                            расскажем).</p>
                        <p className="l-eleven t-left l-mb1">👉 Риск минимален! Вы можете установить сумуу-ограничение.
                            Например на старте 1000$ оимит 900. Если программа проиграет 100$, вам прийдет уведомление и
                            торговля будет приостановлена.</p>
                        <p className="l-eleven t-left l-mb1">👉 Лимиты у пользователей срабатывают крайне редко.</p>

                        <p className="t-left l-nmb">
                            <a href="https://t.me/VladislavBrk" target="_self" className="redFlat l-left f-size32">Купить
                                за 100$ /мес</a>
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