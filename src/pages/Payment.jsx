import React from 'react'
import { ReactComponent as Mastercard } from '../assets/mastercard.svg';
import { ReactComponent as Paypal } from '../assets/paypal.svg';
import { ReactComponent as Visa } from '../assets/visa.svg';
import { ReactComponent as Amex } from '../assets/amex.svg';
import Crown  from '../assets/crown.svg';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate()
  const handleData = () => {
    navigate('/paysuccess');
  };
  return (
    //300 = font-light
    //500 = font-medium
    //700 = font-bold
    <div>
        <div className='pt-[27px] sm:pt-[47px] pb-[20px] px-[50px] sm:px-[100px] xl:px-[260px] shadow-md'>
            <div className='text-stage flex gap-[8px] text-[16px] sm:text-[20px]'>
                <h1 className='font-bold text-[#8A8A8A]'>Isi Data Diri</h1>
                <h1 className='font-bold text-[#8A8A8A]'>{'>'}</h1>
                <h1 className='font-bold'>Bayar</h1>
                <h1 className='font-bold text-[#8A8A8A]'>{'>'}</h1>
                <h1 className='font-bold text-[#8A8A8A]'>Selesai</h1>
            </div>
            <div className='flex items-center py-[10px] px-[16px]'>
                <div className='waktu rounded-[12px] bg-[#FF0000] px-[25px] py-3   w-[936px] items-center'>
                    <h1 className='waktu_aja text-white text-[16px] sm:text-[20px] font-medium text-center'>Selesaikan Pembayaran sampai 10 Maret 2023 12:00</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col-reverse items-center sm:flex-row gap-[16px] pt-[30px] sm:w-full sm:justify-center sm:items-start xl:px-[285px]'>
            <div className='pembayaran'>
                <div className='px-[16px] sm:w-[518px]'>
                    <div className='data_pembayaran text-[18px] sm:text-[20px]'>
                        <h1 className='font-bold'>Isi Data Pembayaran</h1>
                    </div>
                    <div className='pt-[16px]'>
                        <div className='text-[14px] sm:text-[16px] bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-[5px]'>
                            <h1 className='font-medium'>Gopay</h1>
                        </div>
                    </div>
                    <div className='pt-[16px]'>
                        <div className='text-[14px] sm:text-[16px] bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-[5px]'>
                            <h1 className='font-medium'>Virtual Account</h1>
                        </div>
                    </div>
                    <div className='pt-[16px]'>
                      <div className='text-[14px] sm:text-[16px] bg-[#7126B5] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-[5px]'>
                          <div>
                              <h1 className='font-medium'>Credit Card</h1>
                          </div>
                      </div>
                      <div className='flex justify-center pt-[28px] gap-[16px]'>
                          <div><Mastercard/></div>
                          <div><Visa/></div>
                          <div><Amex/></div>
                          <div><Paypal/></div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='pembayaran pt-[24px] text-[14px] sm:text-[16px]'>
                          <div className='text-left'>
                            <h1 className='font-medium'>Card number</h1>
                          </div>
                          <div>
                          <form className='font-light'>
                              <input
                              type='text'
                              placeholder='4480 0000 0000 0000'
                              className='outline-none bg-transparent py-[8px] border-b border-[#D0D0D0] w-[296px]'
                              />
                          </form>
                          </div>
                          <div className='pt-[18px] text-left'>
                            <h1 className='font-medium text-left'>Card holder name</h1>
                          </div>
                          <div>
                          <form className='font-light'>
                              <input
                              type='text'
                              placeholder='John Doe'
                              className='outline-none bg-transparent py-[8px] border-b border-[#D0D0D0] w-[296px]'
                              />
                          </form>
                          </div>
                          <div className='flex justify-center gap-[32px]'>
                          <div>
                              <div className='pt-[18px]'>
                                <h1 className='font-medium'>CVV</h1>
                              </div>
                              <div>
                              <form className='font-light'>
                                  <input
                                  type='text'
                                  placeholder='000'
                                  className='outline-none bg-transparent py-[8px] border-b border-[#D0D0D0] w-[132px]'
                                  />
                              </form>
                              </div>
                          </div>
                          <div>
                              <div className='pt-[18px]'>
                              <h1 className='font-medium'>Expiry date</h1>
                              </div>
                              <div>
                              <form className='font-light'>
                                  <input
                                  type='text'
                                  placeholder='07/24'
                                  className='outline-none bg-transparent py-[8px] border-b border-[#D0D0D0] w-[132px]'
                                  />
                              </form>
                              </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className='pt-[34px] pb-[132px]'>
                        <div onClick={handleData} className='text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                            <h1 className='text-[14px] sm:text-[16px] text-[#FFFFFF]'>Simpan</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='booking px-[16px] sm:w-[518px]'>
              <div className='flex gap-[5px] text-[16px] sm:text-[18px]'>
                  <div>
                      <h1 className='font-bold'>Booking Code: </h1>
                  </div>
                  <div>
                      <h1 className='font-bold text-[#7126B5]'>6723y2GHK</h1>
                  </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <h1 className='font-bold text-[14px] sm:text-[16px]'>07.00</h1>
                </div>
                <div>
                  <h1 className='font-bold text-[10px] sm:text-[12px] text-[#A06ECE] pl-[158px]'>Keberangkatan</h1>
                </div>
              </div>
            <div className='tanggal'>
              <div>
                <h1 className='font-light text-[14px] sm:text-[16px]'>3 Maret 2023</h1>
              </div>
            </div>
            <div className='bandara-term'>
              <h1 className='font-medium text-[12px] sm:text-[14px]'>Soekarno Hatta - Terminal 1A Domestik</h1>
            </div>
            <div className='line pt-[16px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='pt-[8px] flex jutify-between items-center gap-[8px] text-[12px] sm:text-[14px]'>
              <div>
                <div><img src={Crown}/></div>
              </div>
              <div className='informasi'>
                <div>
                  <h1 className='font-bold text-[#151515]'>Jet Air - Economy</h1>
                </div>
                <div>
                  <h1 className='font-bold text-[#151515]'>JT - 203</h1>
                </div>    
                <div className='pt-[18px]'>
                  <div>
                    <h1 className='font-bold text-[#151515]'>Informasi</h1>
                  </div>
                  <div>
                    <h1 className='font-light'>Baggage 20 kg</h1>
                  </div>
                  <div>
                    <h1 className='font-light'>Cabin baggage 7 kg</h1>
                  </div>
                  <div>
                    <h1 className='font-light'>In Flight Entertainment</h1>
                  </div>
                </div>       
              </div>
            </div>
            <div className='line pt-[8px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='pt-[12px] text-[12px] sm:text-[14px]'>
              <div className='flex justify-between'>
                <div>
                  <h1 className='font-bold'>11.00</h1>
                </div>
                <div>
                  <h1 className='font-bold text-[10px] sm:text-[12px] text-[#A06ECE] pl-[158px]'>Keberangkatan</h1>
                </div>
              </div>
              <div className='tanggal'>
              <div>
                <h1 className='font-light'>3 Maret 2023</h1>
              </div>
              </div>
              <div className='bandara-term'>
                <h1 className='font-medium'>Melbourne International Airport</h1>
              </div>
            </div>
            <div className='line pt-[16px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='pt-[8px] text-[12px] sm:text-[14px]'>
              <div>
                <h1 className='font-bold ='>Rincian Harga</h1>
              </div>
              <div className='flex justify-between'>
                <div>
                  <h1 className='font-light'>2 Adults</h1>
                  <h1 className='font-light'>1 Baby</h1>
                  <h1 className='font-light'>Text</h1>
                </div>
                <div className='text-end'>
                  <h1 className='font-light'>IDR 9.550.000</h1>
                  <h1 className='font-light'>IDR 0</h1>
                  <h1 className='font-light'>IDR 300.000</h1>
                </div>
              </div>
            </div>
            <div className='line pt-[4px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='flex justify-between pt-[8px]'>
              <div>
                <h1 className='font-bold text-[14px] sm:text-[16px]'>Total</h1>
              </div>
              <div>
                <h1 className='font-bold text-[16px] sm:text-[18px] text-[#7126B5]'>IDR 9.850.000</h1>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Payment