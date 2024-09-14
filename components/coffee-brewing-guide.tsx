'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const brewingSteps = [
  {
    title: "コーヒー豆を挽く",
    description: "中細挽きで、1カップあたり10グラムのコーヒー豆を挽きます。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-09-14%2019.23.02%20-%20A%20close-up%20image%20of%20ground%20coffee%20beans%20in%20a%20grinder%20set%20to%20a%20medium-fine%20grind.%20Next%20to%20the%20grinder,%20there's%20a%20digital%20scale%20displaying%2010%20grams%20of%20c-sip077U8VJIOnDx4zGjJWdGDZ9XUb8.webp"
  },
  {
    title: "フィルターをセット",
    description: "ペーパーフィルターをドリッパーにセットし、お湯で軽くすすぎます。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-09-14%2019.25.23%20-%20A%20close-up%20image%20of%20a%20paper%20coffee%20filter%20set%20in%20a%20dripper,%20being%20lightly%20rinsed%20with%20hot%20water.%20Steam%20is%20gently%20rising%20as%20the%20water%20flows%20through%20the-pw2K7KVE044qPgH3v4cG7e3OnspxAb.webp"
  },
  {
    title: "コーヒー粉を入れる",
    description: "挽いたコーヒー粉をフィルターに入れ、中心を少し凹ませます。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-09-14%2019.23.50%20-%20A%20close-up%20image%20of%20ground%20coffee%20in%20a%20paper%20coffee%20filter%20placed%20inside%20a%20dripper.%20The%20ground%20coffee%20is%20shaped%20into%20a%20small%20indentation%20in%20the%20center-bWHKwTCD7uGhJiViyOJouV11OwwXyI.webp"
  },
  {
    title: "お湯を注ぐ",
    description: "92-96℃のお湯を、粉全体に均等にゆっくりと注ぎます。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-09-14%2019.26.17%20-%20A%20close-up%20image%20showing%20hot%20water%20(around%2092-96%C2%B0C)%20being%20carefully%20poured%20from%20a%20gooseneck%20kettle%20over%20ground%20coffee%20in%20a%20dripper.%20The%20water%20is%20flowi-pWlTXHGmgCOnNUmDxj3RCCLeq7iyQl.webp"
  },
  {
    title: "蒸らし",
    description: "30秒ほど蒸らし、コーヒーの香りを引き出します。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-09-14%2019.26.47%20-%20A%20close-up%20image%20of%20coffee%20grounds%20blooming%20after%20a%20slow%20pour-over,%20with%20steam%20gently%20rising.%20The%20coffee%20has%20been%20allowed%20to%20bloom%20for%20around%2030%20secon-SWtmOUuwmTliIINYLfZ67xcBIp81ob.webp"
  },
  {
    title: "抽出",
    description: "残りのお湯をゆっくりと注ぎ、2-3分かけて抽出します。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-09-14%2019.27.24%20-%20A%20close-up%20image%20of%20the%20final%20stages%20of%20a%20pour-over%20coffee%20process,%20where%20the%20remaining%20hot%20water%20is%20being%20poured%20slowly%20into%20the%20coffee%20dripper.%20The%20-RSoPvfXX087LlP3bEi3W6uDDeRbKJk.webp"
  }
]

export function CoffeeBrewingGuideComponent() {
  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <Card className="w-full max-w-4xl mx-auto bg-amber-100 shadow-lg">
        <CardHeader className="border-b border-amber-200">
          <CardTitle className="text-3xl font-bold text-brown-800">コーヒーの淹れ方ガイド</CardTitle>
          <CardDescription className="text-xl text-brown-600">完璧なドリップコーヒーを淹れるための6つのステップ</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ol className="space-y-8">
            {brewingSteps.map((step, index) => (
              <li key={index} className="pb-8 border-b border-amber-200 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}: ${step.title}`}
                    className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-brown-800 mb-2">{`${index + 1}. ${step.title}`}</h3>
                    <p className="text-lg text-brown-600">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}