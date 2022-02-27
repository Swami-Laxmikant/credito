import { faqSection } from "../data/Strings"
import Faq from "react-faq-component";
import arrowIcon from '../icons/arrowRight.svg'
import { useEffect, useRef } from "react";
export default function FaqComp({ setHeight }) {

    const isHeightSet = useRef(false);
    const divRef = useRef();
    useEffect(() => {
        if (!isHeightSet.current) {
            setHeight(divRef.current.offsetHeight / window.innerHeight)
            isHeightSet.current = true
        }
    }, [])

    return <div ref={divRef} className="f fc faqCont">
        <div style={{ minHeight: '4.5em' }} />
        <h2>Frequently asked questions</h2>
        {faqSection.map((i, index) => <FaqsComp item={i} key={index} />)}
        <div style={{ minHeight: '4.5em' }} />
    </div>
}

const FaqsComp = ({ item }) => {

    return <Faq
        data={item}
        styles={styles}
        config={config}
    />

}

const styles = {
    bgColor: 'none',
    titleTextColor: "var(--creditoBrightColor)",
    rowContentColor: '#fffa',
    arrowColor: "red",
    titleTextSize: '1.2em',
    rowTitleTextSize: '1em',
    rowContentTextSize: '.9em',
    rowContentPaddingBottom: '10px',
};

const config = {
    animate: true,
    arrowIcon: <img style={{ transform: `rotate(90deg)`, width: 8 }} src={arrowIcon} />,
};