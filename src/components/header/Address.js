import React from 'react'

export const Address = () => {
  return (
    <>
      <div className="w-full bg-[#0D4E6E]">
        {/* bg color*/}
        <div className="max-w-[1440px] mx-auto px-4">
          {/* center */}
          <div className="py-4 flex flex-col justify-start items-start gap-2">
            {/*  */}
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              {/* Address */}
              <div className="flex justify-start items-center gap-3">
                <i className="bi bi-geo-alt text-white text-lg"></i>
                <div className="text-white text-sm font-normal font-nunito leading-[22.4px] break-words">
                  3 Ashland Street Medford, MA 02155
                </div>
              </div>

              {/* Container with tel and email */}
              <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-5.5">
                {/* Tel*/}
                <div className="flex justify-start items-center gap-3">
                  <i className="bi bi-telephone text-white text-md"></i>
                  <div className="text-white text-sm font-normal font-nunito leading-[22.4px] break-words">
                    (+1) (781)-(874)-(1630)
                  </div>
                </div>

                {/* hidden when */}
                <div className="hidden md:block px-4 text-white">|</div>

                {/* Email */}
                <div className="flex justify-start items-center gap-3">
                  <i className="bi bi-envelope text-white text-md"></i>
                  <div className="text-white text-sm font-normal font-nunito leading-[22.4px] break-words">
                    somervilledental@verzion.net
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
