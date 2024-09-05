import SectionTitle from "./SectionTitle"


function WhoAreWeSection() {
    return (
        <div className="py-14 flex justify-center flex-col items-center">
            <SectionTitle title="من نحن ؟" />
            <div className="mt-6 desktop:max-w-[780px] max-w-[80%] text-center desktop:text-xl text-sm font-sans">
                <p className=" font-secondryFont leading-relaxed font-semibold" dir="rtl" lang="ar">تأسست مؤسسة محمود فهمي درويش مؤسسة خيريه غير ربحية تأسست بتاريخ 17 اغسطس 2020 مشهرة برقم 4146 بالاسكندرية .
                    <br />
                    <span className="desktop:mt-6 mt-4 inline-block" />
                    هدف المؤسسة مساعدة كل محتاج و معاونه كل من يريد مساعدة المحتاجين الذين في امس الحاجه للمساعدة .
                </p>
            </div>
            <div className="h-0.5 w-[300px] mt-6 bg-secondryColor rounded-md"></div>
        </div>
    )
}

export default WhoAreWeSection