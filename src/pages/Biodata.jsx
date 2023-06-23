import React, {useState} from 'react';
import { ReactComponent as Wrapper } from '../assets/Wrapper.svg';
import Crown  from '../assets/crown.svg';
import { FiCalendar,FiChevronDown } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import { updateCustomerData, updatePassengersData, postDataToApi } from "../redux/actions/actions";


const Biodata = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [familName, setFamilyName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [nationaly, setNationaly] = useState("")
  const [identityNumber, setIdentityNumber] = useState("")
  const [issuingCountry, setIssuingCountry] = useState("")
  const [availableUntil, setAvailableUntil] = useState("")

  const mapStateToProps = (state) => {
    return {
      customer: state.customer,
      passengers: state.passengers
    };
  };  

  const mapDispatchToProps = (dispatch) => {
    return {
      updateCustomerData: (customer) => dispatch(updateCustomerData(customer)),
      updatePassengersData: (passengers) => dispatch(updatePassengersData(passengers)),
      postDataToApi: (data) => dispatch(postDataToApi(data))
    };
  };
  
  const handleSubmit = () => {
    const { customer, passengers, postDataToApi } = this.props;
  
    // Menggabungkan data customer dan passengers menjadi satu objek
    const data = {
      customer,
      passengers
    };
  
    // Memanggil action creator postDataToApi untuk melakukan POST data ke API
    postDataToApi(data);
  };

  const [data] = useState([
    { value: false },
    { value: false },
    { value: false },

    { value: true },
    { value: true },
    { value: true },

    { value: false },
    { value: false },
    { value: false },

    { value: false },
    { value: false },
    { value: true },

    { value: false },
    { value: false },
    { value: false },

    { value: true },
    { value: true },
    { value: true },

    { value: true },
    { value: true },
    { value: true },
    
    { value: false },
    { value: false },
    { value: false },

    { value: false },
    { value: false },
    { value: false },

    { value: false },
    { value: false },
    { value: false },

    { value: true },
    { value: true },
    { value: true },
    
    { value: false },
    { value: false },
    { value: false },
  ]);
  const [datadua] = useState([
    { value: false },
    { value: false },
    { value: false },

    { value: false },
    { value: false },
    { value: false },

    { value: false },
    { value: false },
    { value: true  },

    { value: true },
    { value: true },
    { value: true },

    { value: true },
    { value: true },
    { value: true },

    { value: true },
    { value: true },
    { value: false },

    { value: true },
    { value: true },
    { value: true },
    
    { value: true },
    { value: true },
    { value: true },

    { value: true },
    { value: true },
    { value: true },

    { value: false },
    { value: false },
    { value: false },

    { value: false },
    { value: false },
    { value: false },
    
    { value: true },
    { value: true },
    { value: true },
  ]);

  return (
    //300 = font-light
    //500 = font-medium
    //700 = font-bold
    <div>
      <div className='pt-[27px] sm:pt-[47px] pb-[20px] px-[50px] sm:px-[100px] xl:px-[260px] shadow-md'>
        <div className='text-stage text-[16px] sm:text-[20px] flex gap-[8px]'>
          <h1 className='font-bold'>Isi Data Diri</h1>
          <h1 className='font-bold text-[#8A8A8A]'>{'>'}</h1>
          <h1 className='font-bold text-[#8A8A8A]'>Bayar</h1>
          <h1 className='font-bold text-[#8A8A8A]'>{'>'}</h1>
          <h1 className='font-bold text-[#8A8A8A]'>Selesai</h1>
        </div>
      </div>
      
      <div className='flex items-center w-full gap-[16px] pt-[25px] sm:pt-[30px] sm:w-full sm:justify-center sm:items-start xl:px-[285px] flex-col-reverse sm:flex-row'>
        <div className='w-full sm:w-auto px-[20px]'>
          <div className='isi_data border-[1px] border-[#8A8A8A] px-[12px] sm:px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]'>
            <div className='data_pemesanan text-[18px] sm:text-[20px]'>
              <h1 className='font-bold'>Isi Data Pemesanan</h1>
            </div>
            <div className='pt-[16px]'>
              <div className='data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-t-[10px]'>
                <h1 className='font-medium text-[14px] sm:text-[16px]'>Data Diri Pemesan</h1>
              </div>
            </div>
            <div className='px-[16px]'>
              <div className='pt-[16px]'>
                <h1 className='text-[#4B1979] font-bold text-[12px] sm:text-[14px]'>Nama Lengkap</h1>
              </div>
              <div className='sm:w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] text-[12px] sm:text-[14px] font-medium rounded-[4px]'>
                  <input
                    type='text'
                    value={customer.fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder='Nama Lengkap'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
              <div className='pt-[12px] flex justify-between'>
                <div>
                  <h1 className='font-light text-[12px] sm:text-[14px]'>Punya Nama Keluarga?</h1>
                </div>
                <div>
                  <Wrapper/>
                </div>
              </div>
              <div className='pt-[12px]'>
                <h1 className='text-[#4B1979] font-bold text-[12px] sm:text-[14px]'>Nama Keluarga</h1>
              </div>
              <div className='sm:w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] text-[12px] sm:text-[14px]'>
                  <input
                    type='text'
                    value={customer.familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    placeholder='Nama Keluarga'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
              <div className='pt-[12px]'>
                <h1 className='text-[#4B1979] font-bold text-[12px] sm:text-[14px]'>Nomor Telepon</h1>
              </div>
              <div className='sm:w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] text-[12px] sm:text-[14px]'>
                  <input
                    type='text'
                    value={customer.phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Nomor Telepon'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
              <div className='pt-[12px]'>
                <h1 className='text-[#4B1979] font-bold text-[12px] sm:text-[14px]'>Email</h1>
              </div>
              <div className='sm:w-[454px] pt-[4px]'>
                <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] text-[12px] sm:text-[14px]'>
                  <input
                    type='text'
                    value={customer.email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='outline-none bg-transparent py-[8px] px-[16px]'
                  />
                </form>
              </div>
            </div>         
          </div>
          
          <div className='pt-[24px]'>
            <div className='isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]'>
              <div className='text-[12px]'>
                <div className='data_pemesanan'>
                  <h1 className='font-bold text-xl sm:text-[14px]'>Isi Data Penumpang</h1>
                </div>
                <div className='pt-[16px]'>
                  <div className='data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-t-[10px]'>
                    <h1 className='font-medium sm:text-[14px]'>Data Diri Penumpang 1 - Adult</h1>
                  </div>
                </div>
                <div className='px-[16px]'>
                  <div className='pt-[16px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Title</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Mr.'
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                      <FiChevronDown  className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Nama Lengkap</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder='Harry'
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px] flex justify-between'>
                    <div>
                      <h1 className='font-light sm:text-[14px]'>Punya Nama Keluarga?</h1>
                    </div>
                    <div>
                      <Wrapper/>
                    </div>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Nama Keluarga</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.familyName}
                        onChange={(e) => setFamilyName(e.target.value)}
                        placeholder='Nama Keluarga'
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Tanggal Lahir</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        placeholder='dd/mm/yy'
                        className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                      />
                      <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Kewarganegaraan</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.nationaly}
                        onChange={(e) => setNationaly(e.target.value)}
                        placeholder='Indonesia'
                        className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#3C3C3C]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>KTP/Paspor</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.identityNumber}
                        onChange={(e) => setIdentityNumber(e.target.value)}
                        placeholder=''
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Negara Penerbit</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.issuingCountry}
                        onChange={(e) => setIssuingCountry(e.target.value)}
                        placeholder=''
                        className='outline-none bg-transparent py-[8px] px-[16px]'
                      />
                      <FiChevronDown  className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                  <div className='pt-[12px]'>
                    <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Berlaku Sampai</h1>
                  </div>
                  <div className='sm:w-[454px] pt-[4px]'>
                    <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                      <input
                        type='text'
                        value={passengers.availableUntil}
                        onChange={(e) => setAvailableUntil(e.target.value)}
                        placeholder='dd/mm/yy'
                        className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                      />
                      <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                    </form>
                  </div>
                </div>   
                
                {/* <div>
                  <div className='pt-[24px]'>
                    <div className='data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-t-[10px]'>
                      <h1 className='font-medium sm:text-[16px]'>Data Diri Penumpang 2 - Adult</h1>
                    </div>
                  </div>
                  <div className='px-[16px]'>
                    <div className='pt-[16px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Title</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder='Mr.'
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Nama Lengkap</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder='Harry'
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px] flex justify-between'>
                      <div>
                        <h1 className='font-light sm:text-[14px]'>Punya Nama Keluarga?</h1>
                      </div>
                      <div>
                        <Wrapper/>
                      </div>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Nama Keluarga</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder='Nama Keluarga'
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Tanggal Lahir</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder='dd/mm/yy'
                          className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                        />
                        <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Kewarganegaraan</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-medium rounded-[4px] sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder='Indonesia'
                          className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#3C3C3C]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>KTP/Paspor</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder=''
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Negara Penerbit</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder=''
                          className='outline-none bg-transparent py-[8px] px-[16px]'
                        />
                        <FiChevronDown  className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                      </form>
                    </div>
                    <div className='pt-[12px]'>
                      <h1 className='text-[#4B1979] font-bold sm:text-[14px]'>Berlaku Sampai</h1>
                    </div>
                    <div className='sm:w-[454px] pt-[4px]'>
                      <form className='border-[1px] border-[#D0D0D0] font-light rounded-[4px] flex justify-between items-center sm:text-[14px]'>
                        <input
                          type='text'
                          placeholder='dd/mm/yy'
                          className='outline-none bg-transparent py-[8px] px-[16px] placeholder-[#D0D0D0]'
                        />
                        <FiCalendar className='text-[24px] text-[#8A8A8A] pr-[10px]'/>
                      </form>
                    </div>
                  </div>     
                </div>   */}
              </div>      
            </div>

            <div className='pt-[24px]'>
              <div className='isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]'>
                <div className='data_kursi'>
                  <h1 className='font-bold text-[18px] sm:text-[20px]'>Pilih Kursi</h1>
                </div>
                <div className='pt-[16px] flex items-center'>
                  <div className='data_diri bg-[#73CA5C] text-white font-medium py-[8px] px-[16px] w-full sm:w-[486px] rounded-[4px] items-center'>
                    <h1 className='font-medium text-center text-[12px] sm:text-[14px]'>Economy - 64 Seats Available</h1>
                  </div>
                </div>
                <div className='angka sm:px-[80px] pt-[15px]'>
                  <div className='flex justify-between items-center text-[#8A8A8A] font-medium'>
                    <div className='flex justify-between text-[12px] gap-2 sm:text-[14px]'>
                      <h1 className='mx-[15px]'>A</h1>
                      <h1 className='mx-[15px]'>B</h1>
                      <h1 className='mx-[15px]'>C</h1>
                    </div>
                    <div className='flex justify-between text-[12px] gap-2 sm:text-[14px]'>
                      <h1 className='mx-[16px]'>D</h1>
                      <h1 className='mx-[16px]'>E</h1>
                      <h1 className='mx-[16px]'>F</h1>
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-[5px] sm:gap-[20px] pt-[12px]'>
                    <div className='kotak1 grid grid-cols-3 gap-3 mt-2 text-[#F2F2F2]'>
                      {data.map((item, index) => (
                        <div
                          className={`bg-${item.value ? '[#73CA5C]' : '[#D0D0D0]'} w-[36px] h-[36px] rounded flex justify-center items-center`}
                          key={index}
                          // onClick={() => handleClick(index)}
                        >
                          {item.value ? '' : 'X'}
                        </div>
                      ))}
                    </div>

                    <div className='kotak2 grid grid-cols-1 gap-3 mt-2 flex text-center text-[12px]'>
                      {Array.from({ length: 12 }, (_, index) => (
                        <div
                          key={index + 1}
                          className='bg-[#F2F2F2] px-[5px] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center'
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>

                    <div className='kotak3 grid grid-cols-3 gap-3 mt-2 text-[#F2F2F2]'>
                      {datadua.map((item, index) => (
                        <div
                          className={`bg-${item.value ? '[#73CA5C]' : '[#D0D0D0]'} w-[36px] h-[36px] rounded flex justify-center items-center`}
                          key={index}
                          // onClick={() => handleClick(index)}
                        >
                          {item.value ? '' : 'X'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-[34px] pb-[132px]'>
              <div onClick={handleSubmit} className='text-center bg-[#7126B5] py-[16px] px-[10px] rounded-[12px] shadow-md' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                <h1 className='text-[14px] sm:text-[16px] text-[#FFFFFF]'>Simpan</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='colom_nomor'>
          <div className='sm:pl-[28px]'>
            <div className='detail'>
              <h2 className='font-bold text-[18px] sm:text-[18px]'>Detail Penerbangan</h2>
            </div>
            <div className='flex justify-between'>
              <div>
                <h1 className='font-bold text-[12px] sm:text-[14px]'>07.00</h1>
              </div>
              <div>
                <h1 className='font-bold text-[10px] text-[#A06ECE] pl-[158px] sm:text-[12px]'>Keberangkatan</h1>
              </div>
            </div>
            <div className='tanggal'>
              <div>
                <h1 className='font-light text-[12px] sm:text-[14px]'>3 Maret 2023</h1>
              </div>
            </div>
            <div className='bandara-term'>
              <h1 className='font-medium text-[12px] sm:text-[14px]'>Soekarno Hatta - Terminal 1A Domestik</h1>
            </div>
            <div className='line pt-[16px]'>
              <div className='border-[1px] border-[#D0D0D0]'>
              </div>
            </div>
            <div className='pt-[8px] flex jutify-between items-center gap-[8px]'>
              <div>
                <div><img src={Crown}/></div>
              </div>
              <div className='informasi text-[12px] sm:text-[14px]'>
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
                    <h1 className='font-light text-[12px]'>Baggage 20 kg</h1>
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
            <div className='pt-[12px]'>
              <div className='flex justify-between'>
                <div>
                  <h1 className='font-bold text-[12px] sm:text-[14px]'>11.00</h1>
                </div>
                <div>
                  <h1 className='font-bold text-[#A06ECE] pl-[158px] text-[10px] sm:text-[12px]'>Keberangkatan</h1>
                </div>
              </div>
              <div className='tanggal'>
              <div className='text-[12px] text-[12px] sm:text-[14px]'>
                <h1 className='font-light'>3 Maret 2023</h1>
              </div>
              </div>
              <div className='bandara-term text-[12px] sm:text-[14px]'>
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
              <div className='flex justify-between text-[12px] sm:text-[14px]'>
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
              <div className='text-[14px] sm:text-[16px]'>
                <h1 className='font-bold'>Total</h1>
              </div>
              <div className='text-[14px] sm:text-[18px]'>
                <h1 className='font-bold text-[18px] text-[#7126B5]'>IDR 9.850.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Biodata);

