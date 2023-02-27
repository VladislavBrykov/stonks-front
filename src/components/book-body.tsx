import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Image from "next/image";


export const BookBody = ()=>{
    return(
        <>
            <div id="simulateHero" className="l-row">
                <div className="l-block shortHeroVert">
                    <h1 className="c-white">Книга 10$</h1>
                    <p className="c-white">
                        Анализ паттернов при торговле криптовалютами - практическое руководство
                    </p>
                </div>
            </div>


            <div className="l-row b-white">
                <div className="l-block ffHero">
                    <div className="l-eight">
                        <h1 className="t-left l-m-mt1">Что вы получите</h1>
                        <p className="l-eleven t-left l-mb1">👉 Анализ паттернов при торговле криптовалютами - это практическое руководство для трейдеров, которые хотят изучить основные паттерны и индикаторы для успешной торговли на рынке криптовалют. </p>
                        <p className="l-eleven t-left l-mb1">👉 Книга содержит подробное описание различных типов графиков и свечных формаций, которые помогут определить возможные точки входа и выхода из позиции.</p>
                        <p className="l-eleven t-left l-mb1">👉 В ней также рассматриваются различные методы анализа, такие как технический и фундаментальный анализ, и объясняется, как правильно использовать индикаторы и осцилляторы для выявления трендов и прогнозирования цен.</p>
                        <p className="l-eleven t-left l-mb1">👉 Книга также включает в себя список наиболее часто встречающихся паттернов и формаций на рынке криптовалют, таких как Двойная вершина, Голова и плечи, Клин, Треугольник, Флаг и другие.</p>
                        <p className="l-eleven t-left l-mb1">👉 Каждый паттерн описывается подробно, включая условия появления, технические характеристики и возможные сценарии развития.</p>
                        <p className="l-eleven t-left l-mb1">👉 Автор книги - опытный трейдер и эксперт в области криптовалют, который использует эти методы и техники в своей собственной торговле. Он предоставляет читателю ценные советы и рекомендации, которые помогут улучшить качество торговли и повысить вероятность успеха</p>
                        <p className="l-eleven t-left l-mb1">👉 Анализ паттернов при торговле криптовалютами - это обязательная книга для всех трейдеров, которые хотят успешно торговать на рынке криптовалют и повысить свой уровень профессионализма.</p>
                        <p className="t-left l-nmb">
                            <Link href="https://t.me/VladislavBrk" target="_self" className="redFlat l-left f-size32">Купить за 10$</Link>
                        </p>
                        <p className="l-eleven t-left l-mb1">👉 Оплату помогает произвести менеджер. Сразу после оплаты вы получите книгу в электронном виде (можно распечатать)</p>

                    </div>
                    <div className="l-four l-nmr">
                        <picture>
                            <source type="image/webp" srcSet="/book.png"/>
                            <source type="image/jpeg" srcSet="/book.png"/>
                            <Image src="/book.png" alt="Monitor" loading="eager" width="350"
                                   height="354"/>
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
                        <Link
                            href="https://t.me/general_stonks"
                            className="redFlat translate f-size32 f-l-height32"
                        >ПОПРОБОВАТЬ БЕСПЛАТНО</Link
                        >
                    </div>
                </div>
            </div>
        </>
    )
}