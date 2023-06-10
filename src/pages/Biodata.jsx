import React from 'react';
import { ReactComponent as Wrapper } from '../assets/Wrapper.svg';
import Crown  from '../assets/crown.svg';
import { FiCalendar,FiChevronDown } from "react-icons/fi";

const Biodata = () => {
  return (
    //300 = font-light
    //500 = font-medium
    //700 = font-bold
    <div>
      <div className='pt-[30px] px-[260px] shadow-md'>
        <div className='text-stage flex gap-[8px]'>
          <h1 className='font-bold'>Isi Data Diri</h1>
          <h1 className='font-bold text-[#8A8A8A]'>{'>'}</h1>
          <h1 className='font-bold text-[#8A8A8A]'>Bayar</h1>
          <h1 className='font-bold text-[#8A8A8A]'>{'>'}</h1>
          <h1 className='font-bold text-[#8A8A8A]'>Selesai</h1>
        </div>
        <div className='flex items-center py-[10px] px-[16px]'>
          <div className='waktu rounded-[12px] bg-[#FF0000] px-[25px] py-3 w-[936px] items-center'>
            <h1 className='waktu_aja text-white text-[16px] text-center'>Selesaikan dalam 00:15:00</h1>
          </div>
        </div>
      </div>
      
      <div className='flex flex-cols-2 gap-[16px] pt-[30px] px-[285px]'>
        <div>
          <div className='isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] w-[518px]'>
            <div className='data_pemesanan'>
              <h1 className='font-bold text-xl'>Isi Data Pemesanan</h1>
            </div>
            <div className='pt-[16px]'>
              <div className='data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] w-[486px] rounded-t-[10px]'>
                <h1 className='font-medium'>Data Diri Pemesan</h1>
              </div>
            </div>
            <div className='px-[16px]'>
              <div className='pt-[16px]'>
                <h1 className='text-[#4B1979] font-bold'>Nama Lengkap</h1>
              </div>
              <div className='w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                  <input
                    type='text'
                    placeholder='Nama Lengkap'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
              <div className='pt-[12px] flex justify-between'>
                <div>
                  <h1 className='font-light'>Punya Nama Keluarga?</h1>
                </div>
                <div>
                  <Wrapper/>
                </div>
              </div>
              <div className='pt-[12px]'>
                <h1 className='text-[#4B1979] font-bold'>Nama Keluarga</h1>
              </div>
              <div className='w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                  <input
                    type='text'
                    placeholder='Nama Keluarga'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
              <div className='pt-[12px]'>
                <h1 className='text-[#4B1979] font-bold'>Nomor Telepon</h1>
              </div>
              <div className='w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                  <input
                    type='text'
                    placeholder='Nomor Telepon'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
              <div className='pt-[12px]'>
                <h1 className='text-[#4B1979] font-bold'>Email</h1>
              </div>
              <div className='w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px]'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
            </div>         
          </div>
          
          <div className='pt-[24px]'>
            <div className='isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] w-[518px]'>
              <div>
                <div className='data_pemesanan'>
                  <h1 className='font-bold text-xl'>Isi Data Penumpang</h1>
                </div>
                <div className='pt-[16px]'>
                  <div className='data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] w-[486px] rounded-t-[10px]'>
                    <h1 className='font-medium'>Data Diri Penumpang 1 - Adult</h1>
                  </div>
                </div>
                <div className='px-[16px]'>
                  <div className='pt-[16px]'>
                    <h1 className='text-[#4B1979] font-bold'>Title</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] flex justify-between items-center'>
                      <input
                        type='text'
                        placeholder='Mr.'
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                      <FiChevronDown  className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>Nama Lengkap</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                      <input
                        type='text'
                        placeholder='Harry'
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px] flex justify-between'>
                    <div>
                      <h1 className='font-light'>Punya Nama Keluarga?</h1>
                    </div>
                    <div>
                      <Wrapper/>
                    </div>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>Nama Keluarga</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                      <input
                        type='text'
                        placeholder='Nama Keluarga'
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>Tanggal Lahir</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center'>
                      <input
                        type='text'
                        placeholder='dd/mm/yy'
                        className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                      />
                      <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>Kewarganegaraan</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                      <input
                        type='text'
                        placeholder='Indonesia'
                        className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#3C3C3C]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>KTP/Paspor</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px]'>
                      <input
                        type='text'
                        placeholder=''
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>Negara Penerbit</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center'>
                      <input
                        type='text'
                        placeholder=''
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                      <FiChevronDown  className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold'>Berlaku Sampai</h1>
                  </div>
                  <div className='w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center'>
                      <input
                        type='text'
                        placeholder='dd/mm/yy'
                        className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                      />
                      <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                </div>   
                
                <div>
                  <div className='pt-[24px]'>
                    <div className='data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] w-[486px] rounded-t-[10px]'>
                      <h1 className='font-medium'>Data Diri Penumpang 2 - Adult</h1>
                    </div>
                  </div>
                  <div className='px-[16px]'>
                    <div className='pt-[16px]'>
                      <h1 className='text-[#4B1979] font-bold'>Title</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                        <input
                          type='text'
                          placeholder='Mr.'
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>Nama Lengkap</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                        <input
                          type='text'
                          placeholder='Harry'
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px] flex justify-between'>
                      <div>
                        <h1 className='font-light'>Punya Nama Keluarga?</h1>
                      </div>
                      <div>
                        <Wrapper/>
                      </div>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>Nama Keluarga</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                        <input
                          type='text'
                          placeholder='Nama Keluarga'
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>Tanggal Lahir</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center'>
                        <input
                          type='text'
                          placeholder='dd/mm/yy'
                          className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                        />
                        <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>Kewarganegaraan</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px]'>
                        <input
                          type='text'
                          placeholder='Indonesia'
                          className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#3C3C3C]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>KTP/Paspor</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px]'>
                        <input
                          type='text'
                          placeholder=''
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>Negara Penerbit</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center'>
                        <input
                          type='text'
                          placeholder=''
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                        <FiChevronDown  className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold'>Berlaku Sampai</h1>
                    </div>
                    <div className='w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center'>
                        <input
                          type='text'
                          placeholder='dd/mm/yy'
                          className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                        />
                        <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                      </form>
                    </div>
                  </div>     
                </div>  
              </div>      
            </div>

            <div className='pt-[24px]'>
              <div className='isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] w-[518px]'>
                <div className='data_kursi'>
                  <h1 className='font-bold text-xl'>Pilih Kursi</h1>
                </div>
                <div className='pt-[16px] flex items-center'>
                  <div className='data_diri bg-[#73CA5C] text-white font-medium py-[8px] px-[16px] w-[486px] rounded-[4px] items-center'>
                    <h1 className='font-medium text-center text-sm'>Economy - 64 Seats Available</h1>
                  </div>
                </div>
                <div className='angka px-[97px] pt-[8px]'>
                  <div className='flex gap-[42px] items-center text-[#8A8A8A] font-medium'>
                    <div className='flex justify-between'>
                      <h1 className='mx-[15px]'>A</h1>
                      <h1 className='mx-[15px]'>B</h1>
                      <h1 className='mx-[15px]'>C</h1>
                    </div>
                    <div className='flex justify-between'>
                      <h1 className='mx-[16px]'>D</h1>
                      <h1 className='mx-[16px]'>E</h1>
                      <h1 className='mx-[16px]'>F</h1>
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-[5px] pt-[12px]'>
                    <div className='kotak1 grid grid-cols-3 gap-2 mt-2 text-[#F2F2F2]'>
                      {/* <!-- Kotak Baris 1 --> */}
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 2 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 3 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 4 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 5 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 6 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 7 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 8 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 9 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 10 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 11 --> */}
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 12 --> */}
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                    </div>
                    <div className='kotak1 grid grid-cols-1 gap-2 mt-2 flex text-center text-[12px]'>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>1</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>2</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>3</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>4</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>5</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>6</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>7</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>8</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>9</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>10</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>11</div>
                      <div className='bg-[#F2F2F2] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'>12</div>
                    </div>
                    <div className='kotak2 grid grid-cols-3 gap-2 mt-2 text-[#F2F2F2]'>
                      {/* <!-- Kotak Baris 1 --> */}
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 2 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 3 --> */} 
                      <div className='bg-[#7126B5] w-[36px] h-[36px] rounded flex justify-center items-center'>P1</div>
                      <div className='bg-[#7126B5] w-[36px] h-[36px] rounded flex justify-center items-center'>P2</div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 4 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 5 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 6 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 7 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 8 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 9 --> */} 
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      {/* <!-- Kotak Baris 10 --> */} 
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 11 --> */}
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      <div className='bg-[#D0D0D0] w-[36px] h-[36px] rounded flex justify-center items-center'>X</div>
                      {/* <!-- Kotak Baris 12 --> */}
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                      <div className='bg-[#73CA5C] w-[36px] h-[36px] rounded flex justify-center items-center'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-[34px] pb-[132px]'>
              <div className='text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                <h1 className='text-[#FFFFFF]'>Simpan</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='colom_nomor'>
          <div className='pl-[28px]'>
            <div className='detail'>
              <h2 className='font-bold text-[18px]'>Detail Penerbangan</h2>
            </div>
            <div className='flex justify-between'>
              <div>
                <h1 className='font-bold text-[14px]'>07.00</h1>
              </div>
              <div>
                <h1 className='font-bold text-[12px] text-[#A06ECE] pl-[158px]'>Keberangkatan</h1>
              </div>
            </div>
            <div className='tanggal'>
              <div>
                <h1 className='font-light'>3 Maret 2023</h1>
              </div>
            </div>
            <div className='bandara-term'>
              <h1 className='font-medium text-[14px]'>Soekarno Hatta - Terminal 1A Domestik</h1>
            </div>
            <div className='line pt-[16px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='pt-[8px] flex jutify-between items-center gap-[8px]'>
              <div>
                <div><img src={Crown}/></div>
              </div>
              <div className='informasi'>
                <div>
                  <h1 className='font-bold text-[14px] text-[#151515]'>Jet Air - Economy</h1>
                </div>
                <div>
                  <h1 className='font-bold text-[14px] text-[#151515]'>JT - 203</h1>
                </div>    
                <div className='pt-[18px]'>
                  <div>
                    <h1 className='font-bold text-[14px] text-[#151515]'>Informasi</h1>
                  </div>
                  <div>
                    <h1 className='font-light text-[12px]'>Baggage 20 kg</h1>
                  </div>
                  <div>
                    <h1 className='font-light text-[12px]'>Cabin baggage 7 kg</h1>
                  </div>
                  <div>
                    <h1 className='font-light text-[12px]'>In Flight Entertainment</h1>
                  </div>
                </div>       
              </div>
            </div>
            <div className='line pt-[8px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='pt-[12px]'>
              <div className='flex justify-between'>
                <div>
                  <h1 className='font-bold'>11.00</h1>
                </div>
                <div>
                  <h1 className='font-bold text-[12px] text-[#A06ECE] pl-[158px]'>Keberangkatan</h1>
                </div>
              </div>
              <div className='tanggal'>
              <div className='text-[14px]'>
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
            <div className='pt-[8px]'>
              <div>
                <h1 className='font-bold ='>Rincian Harga</h1>
              </div>
              <div className='text-[14px] flex justify-between'>
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
                <h1 className='font-bold'>Total</h1>
              </div>
              <div>
                <h1 className='font-bold text-[18px] text-[#7126B5]'>IDR 9.850.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
