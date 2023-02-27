import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

const myLoader = (src:any, width:any, quality: any) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export const Main = ()=>{
    return(
        <>
            <div id="tf_hero" className="refresh l-row l-rel l-mb2">
                <div id="home" className="container">
                    <h1 className="l-mb1 t-left c-white">Торгуйте Фьючерсами с Crypto Роботом </h1>
                    <h3 className="l-mb2 t-left c-white"><span className="shadow">Начните зарабатывать с</span> <span className="f-bold">БЕСПЛАТНЫХ</span> <span className="shadow"> прогнозов и моделирования торговли.</span></h3>
                    <form id="dDownload" action="SSI/Processor/licenseCheck.php" method="POST" className="flat l-twelve">
                        <ul className="l-inline">
                            {/*<li className="l-nine">*/}
                            {/*    <input type="text" name="email" id="email" className="f-size24 f-l-height60 c-gray" placeholder="Введите код от администратора"/>*/}
                            {/*    </li>*/}
                            {/*<li className="l-three l-nmr">*/}
                            {/*    <input type="hidden" name="email2" id="email2" />*/}
                            {/*    <input type="hidden" name="referred_url_start" id="referred_url_start" value="ninjatrader.com/" />*/}
                            {/*    <input type="hidden" name="ga_label_start" id="ga_label_start" value="Home" />*/}
                            {/*    <input type="submit" className="redFlatSubmit f-size24 f-l-height44 c-white t-center" value="Перейти" />*/}
                            {/*</li>*/}
                        </ul>
                    </form>
                </div>
            </div>

            <div id="bottomHero" className="l-row b-white">
                <div className="l-block">
                    <h2 className="f-bold">Ощутите Безграничные возможности торговли на Фьючерсах Binance</h2>
                    <p className="l-mb2">Все стратегии торговли на фьючерсах. Как постоянно зарабатывать и не терять
                        деньги. Инструкции для новичков. Создание и настройка индивидуальной технологии заработка. </p>
                    <div className="l-three t-center icon clickable">
                        <div id="product" className="iconCont"></div>
                        <p className="l-nm l-mt1 m-center">
                            <Link href='#' className="t-base d-block">
                                <strong className="d-block l-mb1">Услуги для всех трейдеров</strong>
                                Ослеживание самых популярных в мире паттернов
                            </Link>
                        </p>
                    </div>
                    <div className="l-three t-center icon clickable">
                        <div id="award" className="iconCont"></div>
                        <p className="l-nm l-mt1 m-center">
                            <Link href='#' className="t-base d-block" target="_self">
                                <strong className="d-block l-mb1">Много довольных клиентов</strong>
                                Мы помогли многим трейдерам. Кто-то даже сумел заработать целое состояние.
                            </Link>
                        </p>
                    </div>
                    <div className="l-three t-center icon clickable">
                        <div id="savings" className="iconCont"></div>
                        <p className="l-nm l-mt1 m-center">
                            <Link href='#' className="t-base d-block">
                                <strong className="d-block l-mb1">Колосальная экономия времени</strong>
                                Вам уже не нужно часами мониторить графики. Программа сделает это за вас.
                            </Link>
                        </p>
                    </div>
                    <div className="l-three t-center icon clickable l-nmr">
                        <div id="support" className="iconCont"></div>
                        <p className="l-nm l-mt1 m-center">
                            <Link href='#' className="t-base d-block" target="_self">
                                <strong className="d-block l-mb1">Закрытое сообщество</strong>
                                Открытые комментарии к прогнозам. Советы и консультации.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div id="cta" className="l-row">
                <div className="l-block d-grid2C">
                    <div>
                        <h2 className="l-nmb t-center f-bold c-white">КОЛЛОСАЛЬНЫЕ ВОЗМОЖНОСТИ <span
                            className="d-block f-reg f-ital">для</span>TRADING И ТОРГОВЛИ НА FUTURES</h2>
                    </div>
                    <div>
                        <h3 className="t-center c-white l-mb1">Победитель конкурса Fintech Award Winner</h3>
                        <p className="t-center c-white l-nmb">Второй год подряд Stonks получает признание за уникальное
                            сочетание высокопроизводительной торговой платформы и поддержки в режиме реального
                            времени.</p>
                    </div>
                </div>
            </div>

            <div className="l-row b-grayGrad">
                <div className="l-block">
                    <h2 className="f-bold">Торгуйте Фьючерсами <span className="c-green">Выгодно</span></h2>
                    <p className="l-mb2">Выбери свой режим торговли</p>
                    <div className="flexContain">
                        <div className="pr bucketHalf bdrGreen">
                            <Link href="https://t.me/general_stonks"
                               target="_self" className="l-twelve">
                                <h3 className="l-twelve l-p2 ">СИГНАЛЫ</h3>
                                <div className="ro l-twelve l-p1">
                                    <p className="l-twelve l-nmb l-mt1 f-size20 f-l-height24 t-center">Получать прогнозы
                                        24/7</p>
                                    <p className="l-twelve l-nmb f-bold f-size52 f-l-height60 t-center c-green">$50
                                        мес</p>
                                    <p className="l-twelve l-mb1 f-size20 f-l-height24 t-center">круглосуточный анализ
                                        паттернов, остается только повторять. Максимум информации</p>
                                </div>
                            </Link>
                        </div>

                        <div className="pr bucketHalf bdrGreen">
                            <Link href="/automatic" target="_self" className="l-twelve">
                                <h3 className="l-twelve l-p2">AUTOMATIC</h3>
                                <div className="ro l-twelve l-p1">
                                    <p className="l-twelve l-nmb l-mt1 f-size20 f-l-height24 t-center">Программа торгует
                                        за вас</p>
                                    <p className="l-twelve l-nmb f-bold f-size52 f-l-height60 t-center c-green">$100
                                        мес</p>
                                    <p className="l-twelve l-mb1 f-size20 f-l-height24 t-center">автоматизированная
                                        торговля</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="flexContain" style={{ 'marginTop': '40px'}}>
                        <div className="pr bucketHalf bdrGreen">
                            <Link href="/limited-stonks"
                               target="_self" className="l-twelve">
                                <h3 className="l-twelve l-p2 ">СИГНАЛЫ</h3>
                                <div className="ro l-twelve l-p1">
                                    <p className="l-twelve l-nmb l-mt1 f-size20 f-l-height24 t-center">Получать прогнозы
                                        24/7</p>
                                    <p className="l-twelve l-nmb f-bold f-size52 f-l-height60 t-center c-green">$30
                                        мес</p>
                                    <p className="l-twelve l-mb1 f-size20 f-l-height24 t-center">круглосуточный анализ
                                        паттернов, только точки входа</p>
                                </div>
                            </Link>
                        </div>

                        <div className="pr bucketHalf bdrGreen">
                            <Link href="/book" target="_self" className="l-twelve">
                                <h3 className="l-twelve l-p2">КНИГА</h3>
                                <div className="ro l-twelve l-p1">
                                    <p className="l-twelve l-nmb l-mt1 f-size20 f-l-height24 t-center">Трейдинг на
                                        примерах</p>
                                    <p className="l-twelve l-nmb f-bold f-size52 f-l-height60 t-center c-green">$10</p>
                                    <p className="l-twelve l-mb1 f-size20 f-l-height24 t-center">наша авторская книга в
                                        электронном формате, минимум сухой информации, только практика</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <p className="l-twelve l-p1 l-mt2 l-mb3 m-f-size32 f-l-height40">зайди и протестируй возможности в
                        нашем телеграм канале <span className="d-block c-green">ЭТО БЕСПЛАТНО!</span></p>
                </div>
            </div>

            <div className="l-row l-rel" id="indexEco">
                <div className="indexArrow"></div>
                <div className="l-block">
                    <div className="l-six">
                        <h2 className="t-left c-white">Стратегии <span className="d-block">и риски</span></h2>
                        <p className="l-ten t-left c-white">Хотите узнать о преимуществах, недостатках, стратегиях и
                            рисках фьючерсной торговли?</p>
                        <Link href="/strategy-and-risks"
                           className="whiteOpen bHover l-left eco">узнать больше</Link>
                    </div>
                    <div className="l-six l-right" id="indexEcoSecond">
                        <h2 className="t-right c-white">Обучение <span className="d-block">для новичков</span></h2>
                        <p className="l-nine l-right t-right c-white">Обучение трейдингу по прогнозам для начинающих.
                            Пошаговые инструкции с примерами.</p>
                        <Link href="/learning-trade" className="whiteOpen bHover l-right">узнать больше</Link>
                    </div>
                </div>
                <div className="indexArrowBottom"></div>
            </div>

            <div id="wt_row" className="refresh l-row">
                <div id="wt" className="container">
                    <h2>Зачем торговать фьючерсами по прогнозам?</h2>
                    <div>
                        <h3>Торговля в плюс</h3>
                        <p className="t-center">Выберите, какие паттерны хотите остеживать. Полчайте уведомления когда
                            входить в сделку.</p>
                        <p className="t-center l-nm"><Link href="/vip-stonks"
                                                        target="_blank" className="redOpen">ПАТТЕРНЫ</Link></p>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <h3>Пассивный доход</h3>
                        <p className="t-center">Настройте автоматизированную торговлю по выбранным паттернам.
                            Зарабатывайте.</p>
                        <p className="t-center l-nm"><a href="/automatic"
                                                        target="_blank" className="redOpen">ПОДРОБНЕЕ</a></p>
                    </div>
                </div>
            </div>

            <div id="wtch_row" className="refresh l-row">
                <div id="wtch" className="container">
                    <h2 className="f-bold l-mb1">Новичок в крипте? Нажимай и смотри!</h2>
                    <p className="l-mb2">Что нужно знать что-бы зарабатывать на крипте. Полезные обучающие видео.</p>
                    <div>
                        <Link href="https://www.youtube.com/watch?v=7LTQuOgbGTs" target="_self">
                            <p>Как пополнить счёт Бинанс P2P</p>
                            <Image src="/binace.jpeg" alt="The Opening Range" loading="lazy" width={800} height={800}/>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.youtube.com/watch?v=oCFyfzTLL3M" target="_self">
                            <p>Как Торговать Фьючерсами</p>
                            <Image src="/futures.jpeg" alt="Bars Closing" loading="lazy" width={800} height={800}/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}