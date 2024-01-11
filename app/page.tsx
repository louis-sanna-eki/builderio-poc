import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Assortment />
    </main>
  );
}

import * as React from "react";

function Assortment() {
  return (
    <div className="flex items-stretch gap-0 max-md:flex-wrap">
      <div className="justify-between items-center bg-white flex basis-[0%] flex-col pt-3.5 pb-7 px-3.5 border-r-zinc-200 border-r border-solid">
        <span className="items-stretch self-stretch flex justify-between gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbf677b418a9cf21b06ec01531714191e2ca236f827759bc921531f5c31fbd5f?apiKey=fefc4dc743f5437b91c732647225a5b8&"
            className="aspect-square object-contain object-center w-[62px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <div className="overflow-hidden text-pink-600 text-opacity-0 text-ellipsis text-xs my-auto">
            <span className="font-semibold">Assortment</span>
            <br />
            <span className="text-pink-600">Sephora</span>
          </div>
        </span>
        <span className="items-stretch self-stretch flex justify-between gap-1.5 mt-5 px-5 py-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68f2488eba4ecb1826efddbfaec60b52e93b38b467bbc8cbce71b85d0d15625c?apiKey=fefc4dc743f5437b91c732647225a5b8&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium self-center grow whitespace-nowrap my-auto">
            Collapse
          </div>
        </span>
        <span className="items-stretch self-stretch flex justify-between gap-1.5 mt-5 px-5 py-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/775d3948314f0b3d526a73a52cc746a3954f116892b08229c744face5fd4f625?apiKey=fefc4dc743f5437b91c732647225a5b8&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium self-center grow whitespace-nowrap my-auto">
            Analytics
          </div>
        </span>
        <span className="items-stretch self-center flex gap-1.5 mt-3.5 p-1.5 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c44f14880268b4d4b3877d84ee148d452aeb2c8e306cd744cd727fe0f250c7?apiKey=fefc4dc743f5437b91c732647225a5b8&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="overflow-hidden text-slate-800 text-ellipsis text-xs font-medium self-center grow whitespace-nowrap my-auto">
            Assortment
          </div>
        </span>
        <span className="items-stretch self-stretch flex justify-between gap-1.5 mt-3.5 px-5 py-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f762c00b591ca98c2832144f83c34eed5b340cf762f950aac7f25370139e4f?apiKey=fefc4dc743f5437b91c732647225a5b8&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium self-center grow whitespace-nowrap my-auto">
            Golden rules
          </div>
        </span>
        <span className="items-stretch self-stretch flex justify-between gap-1.5 px-5 py-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32d682e505faf46e1ff40d666fa7713451f219040af3f8a2bc132d9c1348689d?apiKey=fefc4dc743f5437b91c732647225a5b8&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium self-center grow whitespace-nowrap my-auto">
            References
          </div>
        </span>
        <div className="items-stretch self-center flex gap-1.5 mt-[603px] pr-7 max-md:mt-10 max-md:pr-5">
          <div className="flex aspect-square flex-col justify-center items-stretch">
            <span className="text-slate-500 text-center text-xs font-medium whitespace-nowrap bg-gray-200 aspect-square justify-center items-center h-[34px] px-2.5 rounded-xl">
              AA
            </span>
          </div>
          <span className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="text-slate-500 text-xs font-medium whitespace-nowrap">
              Anna Albert
            </div>
            <div className="text-slate-500 text-xs font-medium whitespace-nowrap">
              Category Manager
            </div>
          </span>
        </div>
      </div>
      <div className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
        <div className="flex flex-col pt-8 pb-px px-16 border-b-zinc-200 border-b border-solid items-start max-md:max-w-full max-md:px-5">
          <span className="flex w-[478px] max-w-full flex-col items-stretch ml-16">
            <div className="text-gray-800 text-center text-2xl font-semibold max-md:max-w-full">
              Assortment Recommandations
            </div>
            <div className="text-slate-500 text-xs max-md:max-w-full">
              Generated by assortment algorithm with golden rules and brand
              constraints
            </div>
            <span className="items-stretch flex justify-between gap-5 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <span className="text-slate-800 text-xs font-medium whitespace-nowrap justify-center items-stretch aspect-[1.46] py-4 border-b-2 border-b-pink-600 border-solid">
                Aggregated{" "}
              </span>
              <div className="text-slate-500 text-xs font-medium self-center grow whitespace-nowrap my-auto">
                Point of Sale
              </div>
            </span>
          </span>
        </div>
        <div className="self-center flex w-full max-w-[1450px] flex-col items-stretch mt-8 max-md:max-w-full">
          <div className="items-start flex gap-2.5 px-5 self-start max-md:max-w-full max-md:flex-wrap">
            <span className="items-center border bg-white self-stretch flex gap-1.5 px-4 py-2 rounded-md border-solid border-zinc-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41fdf0f38df2f1382d01249915691861149c82e7af65388080e7b72ecb8306dd?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-xs font-medium self-stretch">
                Filters
              </div>
              <span className="text-white text-xs font-medium whitespace-nowrap items-stretch bg-violet-500 aspect-[1.0666666666666667] justify-center my-auto px-1.5 rounded-xl">
                2
              </span>
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9612b97a341b8d283c6052fb3082dbd7407feee514d10e2ac9081b71c9bfc57?apiKey=fefc4dc743f5437b91c732647225a5b8&"
              className="aspect-[0.04] object-contain object-center w-px stroke-[1px] stroke-zinc-200 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch border bg-white flex justify-between gap-2.5 px-3 py-2 rounded-md border-solid border-zinc-200">
              <span className="items-stretch flex justify-between gap-1.5">
                <div className="overflow-hidden text-zinc-800 text-ellipsis whitespace-nowrap text-xs font-medium grow">
                  Brand
                </div>
                <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-slate-50 self-center aspect-[0.9333333333333333] justify-center my-auto px-1.5 rounded-xl border-solid border-zinc-200">
                  1
                </span>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d217ce62ad672774d1e488c3fe1885fef19c73be72af658776fd27284eed0688?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-stretch self-stretch border bg-white flex justify-between gap-2.5 px-3 py-2 rounded-md border-solid border-zinc-200">
              <span className="items-stretch flex justify-between gap-1.5">
                <div className="overflow-hidden text-zinc-800 text-ellipsis whitespace-nowrap text-xs font-medium grow">
                  Product type
                </div>
                <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-slate-50 self-center aspect-[0.9333333333333333] justify-center my-auto px-1.5 rounded-xl border-solid border-zinc-200">
                  1
                </span>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a21e13bca47d533646e668596aef860a03f1a09665afc8b6d1ee943d564fbb76?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-stretch self-stretch border bg-white flex justify-between gap-2.5 px-3 py-2 rounded-md border-solid border-zinc-200">
              <span className="items-stretch flex justify-between gap-1.5">
                <div className="overflow-hidden text-zinc-800 text-ellipsis whitespace-nowrap text-xs font-medium grow">
                  Zone
                </div>
                <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-slate-50 self-center aspect-[0.9333333333333333] justify-center my-auto px-1.5 rounded-xl border-solid border-zinc-200">
                  1
                </span>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f04ef148f05bf7f00391bb99ecc9ecad63a7355bca37a8bcae14bc7070cec500?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="items-stretch flex gap-2.5 mt-2.5 px-5 self-start">
            <div className="items-center bg-zinc-900 flex justify-between gap-1.5 px-2 py-1 rounded-xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc0b7a4f22f4abb7d4a853e832d1fe23e7c2cc4f5619c1db0deb065944573a1?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-[3.58] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/480c5be1930843ac7b4b5613ef53aa09b4a4f3c3a342eb6a6a1d4823dc0a8e3f?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <span className="items-stretch bg-red-100 flex justify-between gap-1.5 px-2 py-1 rounded-xl">
              <div className="overflow-hidden text-pink-800 text-ellipsis text-xs font-medium grow whitespace-nowrap">
                France
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7c19b929ee8541738d7d28f7203bc38e8ea4851fcbe4556e128510c6dd040e9?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
            </span>
            <span className="items-stretch bg-purple-200 flex justify-between gap-1.5 px-2 py-1 rounded-xl">
              <div className="overflow-hidden text-violet-900 text-ellipsis text-xs font-medium grow whitespace-nowrap">
                Perfumes
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf6136384cfaaffca362dc158010a1a3685f8bce599449d287de50530289204a?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
            </span>
          </div>
          <div className="items-stretch border bg-white flex flex-col mt-8 pb-5 rounded-xl border-solid border-zinc-200 max-md:max-w-full">
            <span className="justify-between bg-white flex flex-col pl-5 pr-20 py-4 items-start max-md:max-w-full max-md:pr-5">
              <div className="justify-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold">
                Dior Perfumes - France
              </div>
              <div className="text-slate-500 text-xs font-medium whitespace-nowrap mt-3.5">
                10 Tablettes - 5 client clusters
              </div>
            </span>
            <div className="flex gap-0 px-5 items-end max-md:max-w-full max-md:flex-wrap">
              <div className="self-stretch max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col">
                      <span className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium whitespace-nowrap items-stretch border-t-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-neutral-50 justify-center px-5 py-3.5 border-t border-solid border-b">
                        Tablettes
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/de916dcc2d088800d1825a58f3b71d8ab6e95508a1174ed9a002fffe1c37c2e3?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          2 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27e7e5cb37c0294bba3f2e680e5a31b267c699ef6e985699911ac24dfc8456d?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          3 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/725e82be2182d37145f6e3fa1b070bec78ab6d30144a861d3fdc9a22d3a360ec?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          4 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f16d43a447e5d94d5eed143c9dd83c4b08e85037f71c52de4674eedaf3bc4590?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          5 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac274956ab9055b35eb3448c224944eb19493fde98a4483b43f637d0bfb8b423?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          6 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c352fab5bfa2c3445ea11af798abbdb9dae8f9f8d042f5718847238de2fa70bb?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          7 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ffd12d02b844690335f8df1f4c9d45f01b215efa706fb5d0c1b15f3f9111b8c?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          8 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b6a1aca98daef313f27b277e5765e2cd4cbc0151dc480d79b849e41499c15f3?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          9 Tablettes
                        </div>
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-1.5 px-5 py-5 border-b border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9900a9eeb48af06b63447e001a6da25fdf1137527cbd95f272e42a8adc5786a6?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                          className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="justify-center self-center overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-base font-semibold grow my-auto">
                          10 Tablettes
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col">
                      <span className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium whitespace-nowrap items-stretch border-t-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-neutral-50 justify-center px-5 py-3.5 border-t border-solid border-b">
                        Premium +{" "}
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-pink-100 flex gap-2.5 pr-12 py-px border-b border-solid max-md:pr-5">
                        <div className="bg-pink-600 flex w-0.5 shrink-0 h-[69px] flex-col" />
                        <div className="text-gray-500 text-sm font-semibold my-auto">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            4
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            40
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            6
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            49
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            11
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            68
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            12
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            80
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            14
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            90
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            16
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            100
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            20
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            120
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            22
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            130
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            24
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            140
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col">
                      <span className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium whitespace-nowrap items-stretch border-t-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-neutral-50 justify-center px-5 py-3.5 border-t border-solid border-b">
                        Young & Premium
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex gap-2.5 pr-12 py-px border-b border-solid max-md:pr-5">
                        <div className="bg-white flex w-0.5 shrink-0 h-[69px] flex-col" />
                        <div className="text-gray-500 text-sm font-semibold my-auto">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            3
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            30
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            8
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            53
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            10
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            70
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            10
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            75
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            14
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            90
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            17
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            100
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            20
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            120
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            23
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            132
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            24
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            134
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col">
                      <span className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium whitespace-nowrap items-stretch border-t-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-neutral-50 justify-center px-5 py-3.5 border-t border-solid border-b">
                        Old & Premium
                      </span>
                      <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex gap-2.5 pr-12 py-px border-b border-solid max-md:pr-5">
                        <div className="bg-white flex w-0.5 shrink-0 h-[69px] flex-col" />
                        <div className="text-gray-500 text-sm font-semibold my-auto">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            4
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            30
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            7
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            50
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.2] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            12
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.2] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            71
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            11
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            78
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            16
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            90
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            16
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            100
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            21
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            120
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            21
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            130
                          </span>
                        </div>
                      </span>
                      <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                        <div className="text-gray-500 text-sm font-semibold">
                          References
                          <br />
                          Quantity
                        </div>
                        <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                            24
                          </span>
                          <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                            140
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                <span className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium whitespace-nowrap items-stretch border-t-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-neutral-50 justify-center px-5 py-3.5 border-t border-solid border-b">
                  Young Classic
                </span>
                <span className="items-stretch border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-5 py-px border-b border-solid">
                  <div className="bg-white flex w-0.5 shrink-0 h-[69px] flex-col" />
                  <div className="text-gray-500 text-sm font-semibold my-auto">
                    References
                    <br />
                    Quantity
                  </div>
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
                <span className="text-gray-500 text-sm font-semibold border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white justify-center pl-5 pr-16 py-3.5 border-b border-solid items-start max-md:pr-5">
                  References
                  <br />
                  Quantity
                </span>
              </div>
              <div className="items-start shadow-sm bg-white z-[1] flex mt-0 grow basis-[0%] flex-col pb-12 px-8 rounded-xl max-md:max-w-full max-md:mt-0 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2224f0ac82e7040b7217cef97abc475d6bf752bfff8941407f4cc36ef833178a?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                  className="aspect-[3.58] object-contain object-center w-full overflow-hidden self-stretch rounded-[50%] max-md:max-w-full"
                />
                <div className="items-stretch self-stretch border border-[color:var(--neutral-bg-text-neutral-200,#D6DFE8)] bg-white flex flex-col justify-center mt-1.5 p-2.5 rounded-xl border-solid max-md:max-w-full">
                  <div className="justify-between items-center flex w-full gap-5 pl-16 py-2 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                    <span className="items-stretch flex flex-col my-auto">
                      <div className="text-zinc-800 text-center text-sm font-semibold leading-5 whitespace-nowrap">
                        Dior addict
                      </div>
                      <div className="text-slate-500 text-xs font-medium leading-5 whitespace-nowrap">
                        Perfume - 100ml
                      </div>
                    </span>
                    <div className="items-stretch self-stretch flex justify-between gap-5 pr-2">
                      <span className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-slate-500 text-xs font-medium whitespace-nowrap">
                          Recommended quantity
                        </div>
                        <span className="text-zinc-800 text-xs font-medium items-stretch border border-[color:var(--neutral-bg-text-neutral-200,#D6DFE8)] bg-slate-50 justify-center mt-2.5 px-1.5 py-px rounded-md border-solid">
                          4
                        </span>
                      </span>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f45e4482e9c2e931571ce389e0d61667a66efe6457f9fd5aad0daad089b630d0?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="items-stretch self-stretch border border-[color:var(--neutral-bg-text-neutral-200,#D6DFE8)] bg-white flex flex-col justify-center mt-2.5 p-2.5 rounded-xl border-solid max-md:max-w-full">
                  <div className="justify-between items-center flex w-full gap-5 pl-16 py-2 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                    <span className="items-stretch flex flex-col my-auto">
                      <div className="text-zinc-800 text-center text-sm font-semibold leading-5">
                        J’adore
                      </div>
                      <div className="text-slate-500 text-xs font-medium leading-5 whitespace-nowrap">
                        Perfume - 100ml
                      </div>
                    </span>
                    <div className="items-stretch self-stretch flex justify-between gap-5 pr-2">
                      <span className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-slate-500 text-xs font-medium whitespace-nowrap">
                          Recommended quantity
                        </div>
                        <span className="text-zinc-800 text-xs font-medium items-stretch border border-[color:var(--neutral-bg-text-neutral-200,#D6DFE8)] bg-slate-50 justify-center mt-2.5 px-1.5 py-px rounded-md border-solid">
                          4
                        </span>
                      </span>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68970b532e334697648ff29bca0f6f9a47f8895ef19bd066e5b78473f311d88?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="items-stretch self-stretch border border-[color:var(--neutral-bg-text-neutral-200,#D6DFE8)] bg-white flex flex-col mt-2.5 pt-2.5 px-2.5 rounded-xl border-solid max-md:max-w-full">
                  <span className="justify-between items-center z-[1] flex gap-0 pl-16 py-1.5 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                    <span className="text-zinc-800 text-center text-sm font-semibold leading-5 whitespace-nowrap items-stretch grow my-auto pb-5">
                      Miss Dior Rose N&apos;Roses
                    </span>{" "}
                    <div className="overflow-hidden text-slate-500 text-ellipsis text-xs font-medium mt-8">
                      Old Classic{" "}
                    </div>{" "}
                    <div className="items-stretch flex justify-between gap-5 pr-2 self-start">
                      <span className="text-slate-500 text-xs font-medium whitespace-nowrap justify-center items-stretch grow pb-8">
                        Recommended quantity
                      </span>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c67d0e423461c12f218fa9965e22b002838f06db31283451344ccd2854f1ce03?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                  </span>{" "}
                  <div className="items-center self-center border-t-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-neutral-50 flex mt-0 w-[239px] shrink-0 h-11 flex-col border-t border-solid border-b" />
                </div>{" "}
                <div className="self-center border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex w-[239px] max-w-full flex-col justify-center pr-16 py-px border-b border-solid items-start max-md:pr-5">
                  <div className="bg-white flex w-0.5 shrink-0 h-[69px] flex-col" />
                </div>{" "}
                <div className="items-center self-stretch border border-[color:var(--neutral-bg-text-neutral-200,#D6DFE8)] bg-white z-[1] flex flex-col pt-1 pb-2.5 px-2.5 rounded-xl border-solid max-md:max-w-full">
                  <span className="flex gap-2.5 items-start">
                    <div className="text-gray-500 text-sm font-semibold">
                      References
                      <br />
                      Quantity
                    </div>{" "}
                    <div className="items-stretch self-stretch flex aspect-[0.6363636363636364] flex-col pl-2 pb-6">
                      <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-center border bg-neutral-50 aspect-square justify-center h-5 px-1.5 rounded-md border-solid border-zinc-200">
                        5
                      </span>
                    </div>
                  </span>{" "}
                  <div className="justify-center self-stretch flex flex-col pl-16 py-2 items-end max-md:max-w-full max-md:pl-5">
                    <div className="items-stretch flex w-[178px] max-w-full justify-between gap-5 pr-2">
                      <div className="justify-center flex grow basis-[0%] flex-col pl-5 pr-16 pt-2.5 pb-4 items-start max-md:pr-5">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          44
                        </span>
                      </div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ae274b37560b0c61d3af94459de18bc51f3bd36a572f1e75dd8359fde9218d?apiKey=fefc4dc743f5437b91c732647225a5b8&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="self-center flex mt-0 w-[321px] max-w-full justify-between gap-5 items-end">
                  <div className="flex basis-[0%] flex-col items-stretch mt-32 max-md:hidden max-md:mt-10">
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                      6
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      51
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      10
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      72
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      12
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      80
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      14
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      92
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      16
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      100
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      19
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      120
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      22
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      131
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-7 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      24
                    </span>{" "}
                    <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                      130
                    </span>
                  </div>{" "}
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col pt-12">
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 mt-16 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:mt-10 max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          6
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          50
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          10
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.35] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          70
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          13
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          80
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          14
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.4] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          90
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          16
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          100
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          20
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          122
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          22
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.55] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          132
                        </span>
                      </div>
                    </span>{" "}
                    <span className="border-b-[color:var(--neutral-bg-text-neutral-150,#E7EDF1)] bg-white flex justify-between gap-2.5 pl-5 pr-12 py-3.5 border-b border-solid items-start max-md:pr-5">
                      <div className="text-gray-500 text-sm font-semibold">
                        References
                        <br />
                        Quantity
                      </div>{" "}
                      <div className="items-stretch self-stretch flex basis-[0%] flex-col">
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center px-1.5 py-px rounded-md border-solid border-zinc-200">
                          23
                        </span>{" "}
                        <span className="text-zinc-800 text-xs font-medium whitespace-nowrap items-stretch border bg-neutral-50 aspect-[1.6] justify-center mt-1 px-1.5 py-px rounded-md border-solid border-zinc-200">
                          130
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
