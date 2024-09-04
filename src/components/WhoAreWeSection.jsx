import SectionTitle from "./SectionTitle"


function WhoAreWeSection() {
    return (
        <div className="py-14 flex justify-center flex-col items-center">
            <SectionTitle left="50" title="من نحن ؟" />
            <div className="mt-6 max-w-[780px] text-center text-xl font-sans">
                <p className=" font-secondryFont leading-relaxed font-semibold" dir="rtl" lang="ar">تأسست مؤسسة محمود فهمي درويش مؤسسة خيريه غير ربحية تأسست بتاريخ 17 اغسطس 2020 مشهرة برقم 4146 بالاسكندرية .
                    <br />
                    <span className="mt-6 inline-block" />
                    هدف المؤسسة مساعدة كل محتاج و معاونه كل من يريد مساعدة المحتاجين الذين في امس الحاجه للمساعدة .
                </p>
            </div>
            <div className="h-1 w-[300px] mt-6 bg-secondryColor rounded-md"></div>
        </div>
    )
}

export default WhoAreWeSection