import PersonCard from "./PersonCard"
import hesham from "../assets/hesham.jpg"
import atea from "../assets/atea.jpg"

function PplSection() {
    return (
        <div className=" flex flex-row-reverse flex-wrap items-center w-full pb-12 desktop:gap-8 gap-4 justify-center">
            <h1 className=" desktop:w-[1032px] max-w-[90%] w-[90%] text-3xl   font-bold h-fit py-8 text-center font-secondryFont  bg-secondryBg shadow-md drop-shadow-lg rounded-2xl text-mainTheme">الاعضاء المؤسسين</h1>
            <div className="w-full flex justify-center">
                <PersonCard name="جيلان على محمود" jobTitle="رئيسة المؤسسة" about="" main={true} />
            </div>
            <PersonCard name="هشام الدين على حسن" jobTitle="نائب رئيس المؤسسة" about="صاحب و مدير شركة مقاولات عامة سابقا" img={hesham} />
            <PersonCard name="سمير شعبان أحمد" jobTitle="الامين العام" about="مدير عام شركة مياه الشرب بالاسكندرية سابقا" />
            <PersonCard name="عطية عبد السلام السيد" jobTitle="عضو" about="" img={atea} />
            <PersonCard name="دانية محمود سمير" jobTitle="عضوة" about="" />

        </div>
    )
}

export default PplSection