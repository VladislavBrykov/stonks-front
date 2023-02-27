import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Image from "next/image";


export const LeatningTradeBody = ()=>{
    return(
        <>
            <div id="tradeHero" className="l-row">
                <div className="l-block shortHeroVert">
                    <h1 className="c-white">Торгуйте</h1>
                    <p className="c-white">по прогнозам нашешей программы и вы перестанете сливать депозит.</p>
                </div>
            </div>

            <div className="l-row b-white">
                <div className="l-block l-npb">
                    <p className="l-eight l-push2 l-nmb">Используйте Stonks <span
                        className="f-bold">для</span> торговли по сигналам, автоматизированной торговли или для обучения.
                    </p>
                </div>
                <div className="l-block trade4up">
                    <div className="l-six">
                        <h3 className="t-left l-mb1 f-size48 f-l-height50">Торгуйте, чем хотите</h3>
                        <p className="t-left l-mb1 f-size20 f-l-height26">Со Stonks вы можете тогровать на любых биржах, любой криптой:</p>
                        <ul className="l-gTriS l-mb1">
                            <li className="f-size20 f-l-height22">Binance</li>
                            <li className="f-size20 f-l-height22">Huobi</li>
                            <li className="f-size20 f-l-height22">Coinbase</li>
                            <li className="f-size20 f-l-height22">Kraken</li>
                            <li className="f-size20 f-l-height22">Zaif</li>
                        </ul>
                        <p className="t-left l-mb2 t-base">*Макситмальный профит через Binance Futures</p>
                        <h3 className="t-left l-mb1 f-size48 f-l-height50">Как хотите</h3>
                        <p className="t-left l-mb1 f-size20 f-l-height26">Хотите торговать своими руками, используйте наши сигналы и прогнозы. Хотите без риска зарабатывать ежедневно от 7% до 60%, используйте автоматизированную торговлю</p>
                        <Link data-href="/automatic" href="/automatic"
                           className="vidpop t-left c-green f-size20 f-l-height24">Посмотреть, как это происходит</Link>
                    </div>
                </div>
                <div className="l-block l-mt1 l-mb2 l-npb ATM">
                    <h3 className="l-eight l-right l-mb1 f-size48 f-l-height50 t-left">Торговля по сигналам</h3>
                    <p className="l-eight l-right l-mb1 t-left f-size20 f-l-height26">Мы предлагаем точные прогнозы на фьючерсы криптовалют, используя современные методы анализа. Наша команда экспертов помогает клиентам принимать инвестиционные решения и добиваться успеха в торговле криптовалютами.</p>
                    <p className="l-eight l-right t-left">
                        <Link data-href="https://t.me/general_stonks" href="https://t.me/general_stonks"
                           className="vidpop t-left c-green f-size20 f-l-height24">Посмотреть, как это происходит</Link>
                    </p>
                </div>
            </div>

            <div className="l-block ffHero">
                <div className="l-eight">
                    <h1 className="t-left l-m-mt1">Как работает Stonks бот</h1>
                    <p className="l-eleven t-left l-mb1">Вам в телеграмм постоянно приходят сообщения с прогнозами (LONG
                        или SHORT)</p>
                    <p className="l-eleven t-left l-mb1"></p>

                    <h1 className="t-left l-m-mt1"></h1>
                    <ul className="l-twelve l-gTriS">
                        <li>Ордер: лимитный</li>
                        <li>Плечо не более x20</li>
                        <li>Take Profit: TP, Stop Loss: SL</li>
                        <li>ETHUSDT 🧪 LONG заходим 1595.46000 TP 1619.75635; SL 1583.31182</li>
                        <li>IOTXUSDT 🖍 SHORT заходим 0.02772 TP 0.02730; SL 0.02793</li>
                    </ul>
                    <p className="l-eleven t-left l-mb1"></p>
                    <p className="l-eleven t-left l-mb1">Далее вы заходите на биржу и открываете соответствующую сделку
                        на Фьючерсах Бинанс.</p>


                    <p className="t-left l-nmb">
                        <Link href="https://t.me/general_stonks" target="_self" className="redFlat l-left f-size32">Начать
                            торговать</Link>
                    </p>
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
        </>
    )
}