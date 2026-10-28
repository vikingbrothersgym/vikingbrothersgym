import { GiVikingShield } from "react-icons/gi";

export default function SectionTitle({
    pretitle,
    title,
    subtitle
}) {
    return (
        <div className="text-center text-white px-10 py-5">
            <div className="flex justify-center items-center gap-3">
                <hr style={{"mask-image": "none"}} className="mt-0 mb-0 w-20 mx-0 max-w-20 text-third"/>
                <GiVikingShield className="text-third shrink-0" size={50} />
                <hr style={{"mask-image": "none"}} className="mt-0 mb-0 w-20 mx-0 max-w-20 text-third"/>
            </div>
            <h3 className="text-third uppercase tracking-widest">
                {pretitle}
            </h3>
            <h2 className="font-viking text-4xl md:text-5xl mt-0 mb-4 uppercase">
                {title}
            </h2>
            <h3 className="my-0">
                {subtitle}
            </h3>
        </div>
    );
}