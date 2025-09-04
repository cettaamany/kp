import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState<'account' | 'orders'>('account');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'John',
    phoneNumber: '0xxxxxxxxx',
    birthDate: 'DD/MM/YY',
    parentEmail: 'enter parent email'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // Handle save functionality here
    console.log('Saving changes:', formData);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Sidebar */}
      <div className="w-[413px] bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] flex-shrink-0 h-screen overflow-y-auto">
        <div className="p-8">
          {/* Pages Section */}
          <div className="mb-8">
            <h3 className="text-[#595C5F] font-inter text-xl font-light mb-6 mt-[50px]">Pages</h3>

            {/* Dashboard */}
            <Link to="/dashboard" className="flex items-center p-3 mb-4">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M12.8333 7C12.5028 7 12.2259 6.888 12.0027 6.664C11.7794 6.44 11.6674 6.16311 11.6667 5.83333V1.16667C11.6667 0.836111 11.7787 0.559222 12.0027 0.336C12.2267 0.112778 12.5036 0.000777778 12.8333 0H19.8333C20.1639 0 20.4412 0.112 20.6652 0.336C20.8892 0.56 21.0008 0.836889 21 1.16667V5.83333C21 6.16389 20.888 6.44117 20.664 6.66517C20.44 6.88917 20.1631 7.00078 19.8333 7H12.8333ZM1.16667 11.6667C0.836111 11.6667 0.559222 11.5547 0.336 11.3307C0.112778 11.1067 0.000777778 10.8298 0 10.5V1.16667C0 0.836111 0.112 0.559222 0.336 0.336C0.56 0.112778 0.836889 0.000777778 1.16667 0H8.16667C8.49722 0 8.7745 0.112 8.9985 0.336C9.2225 0.56 9.33411 0.836889 9.33333 1.16667V10.5C9.33333 10.8306 9.22133 11.1078 8.99733 11.3318C8.77333 11.5558 8.49644 11.6674 8.16667 11.6667H1.16667ZM12.8333 21C12.5028 21 12.2259 20.888 12.0027 20.664C11.7794 20.44 11.6674 20.1631 11.6667 19.8333V10.5C11.6667 10.1694 11.7787 9.89255 12.0027 9.66933C12.2267 9.44611 12.5036 9.33411 12.8333 9.33333H19.8333C20.1639 9.33333 20.4412 9.44533 20.6652 9.66933C20.8892 9.89333 21.0008 10.1702 21 10.5V19.8333C21 20.1639 20.888 20.4412 20.664 20.6652C20.44 20.8892 20.1631 21.0008 19.8333 21H12.8333ZM1.16667 21C0.836111 21 0.559222 20.888 0.336 20.664C0.112778 20.44 0.000777778 20.1631 0 19.8333V15.1667C0 14.8361 0.112 14.5592 0.336 14.336C0.56 14.1128 0.836889 14.0008 1.16667 14H8.16667C8.49722 14 8.7745 14.112 8.9985 14.336C9.2225 14.56 9.33411 14.8369 9.33333 15.1667V19.8333C9.33333 20.1639 9.22133 20.4412 8.99733 20.6652C8.77333 20.8892 8.49644 21.0008 8.16667 21H1.16667Z" fill="#7F8183"/>
              </svg>
              <span className="text-[#7F8183] font-inter text-xl font-medium">Dashboard</span>
            </Link>

            {/* Practice with AI */}
            <Link to="/practice-with-ai" className="flex items-center p-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M20.713 8.1281L20.467 8.6941C20.4286 8.78627 20.3637 8.865 20.2806 8.92038C20.1975 8.97575 20.0999 9.00531 20 9.00531C19.9001 9.00531 19.8025 8.97575 19.7194 8.92038C19.6363 8.865 19.5714 8.78627 19.533 8.6941L19.287 8.1281C18.8545 7.12683 18.0624 6.32402 17.067 5.8781L16.308 5.5391C16.2159 5.49675 16.1379 5.42887 16.0832 5.34353C16.0286 5.25819 15.9995 5.15896 15.9995 5.0576C15.9995 4.95625 16.0286 4.85702 16.0832 4.77168C16.1379 4.68633 16.2159 4.61846 16.308 4.5761L17.025 4.2571C18.0454 3.79848 18.8511 2.96599 19.276 1.9311L19.529 1.3201C19.5662 1.22546 19.631 1.1442 19.715 1.08693C19.799 1.02966 19.8983 0.999023 20 0.999023C20.1017 0.999023 20.201 1.02966 20.285 1.08693C20.369 1.1442 20.4338 1.22546 20.471 1.3201L20.724 1.9301C21.1485 2.96518 21.9538 3.79804 22.974 4.2571L23.692 4.5771C23.7838 4.61958 23.8615 4.68745 23.916 4.77268C23.9705 4.85791 23.9994 4.95695 23.9994 5.0581C23.9994 5.15926 23.9705 5.2583 23.916 5.34353C23.8615 5.42876 23.7838 5.49662 23.692 5.5391L22.932 5.8771C21.9368 6.32347 21.1451 7.12663 20.713 8.1281ZM20 11.0001C20.6787 11.0006 21.3526 10.886 21.993 10.6611C21.9977 10.7744 22 10.8874 22 11.0001C22 13.1218 21.1571 15.1567 19.6569 16.657C18.1566 18.1573 16.1217 19.0001 14 19.0001V22.5001C9 20.5001 2 17.5001 2 11.0001C2 8.87837 2.84285 6.84354 4.34315 5.34325C5.84344 3.84296 7.87827 3.0001 10 3.0001H14C14.1133 3.0001 14.2263 3.00244 14.339 3.0071C14.0203 3.91203 13.9233 4.88018 14.056 5.83035C14.1888 6.78052 14.5475 7.685 15.102 8.46792C15.6565 9.25084 16.3906 9.88938 17.2429 10.33C18.0951 10.7706 19.0406 11.0004 20 11.0001Z" fill="#7F8183"/>
              </svg>
              <span className="text-[#7F8183] font-inter text-xl font-medium">Practice with AI</span>
            </Link>

            {/* Exam */}
            <Link to="/exam" className="flex items-center p-3 mb-4">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M15.75 2.25H6.75C6.15326 2.25 5.58097 2.48705 5.15901 2.90901C4.73705 3.33097 4.5 3.90326 4.5 4.5V22.5C4.5 23.0967 4.73705 23.669 5.15901 24.091C5.58097 24.5129 6.15326 24.75 6.75 24.75H20.25C20.8467 24.75 21.419 24.5129 21.841 24.091C22.2629 23.669 22.5 23.0967 22.5 22.5V9L15.75 2.25ZM20.25 22.5H6.75V4.5H14.625V10.125H20.25V22.5Z" fill="#7F8183"/>
              </svg>
              <span className="text-[#7F8183] font-inter text-xl font-medium">Exam</span>
            </Link>

            {/* My profile */}
            <Link to="/my-profile" className="flex items-center p-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.6008 3.99974 9.22593 4.36649 8.01273 5.06363C6.79952 5.76077 5.79038 6.76392 5.08603 7.97295C4.38168 9.18199 4.00675 10.5546 3.99868 11.9538C3.9906 13.3531 4.34966 14.7299 5.04001 15.947C5.50662 15.3406 6.10644 14.8496 6.7931 14.512C7.47975 14.1744 8.23485 13.9992 9.00001 14H15C15.7652 13.9992 16.5203 14.1744 17.2069 14.512C17.8936 14.8496 18.4934 15.3406 18.96 15.947C19.6504 14.7299 20.0094 13.3531 20.0013 11.9538C19.9933 10.5546 19.6183 9.18199 18.914 7.97295C18.2096 6.76392 17.2005 5.76077 15.9873 5.06363C14.7741 4.36649 13.3993 3.99974 12 4ZM19.943 18.076C20.0683 17.9127 20.1883 17.7453 20.303 17.574C21.4116 15.9267 22.0026 13.9856 22 12C22 6.477 17.523 2 12 2C6.47701 2 2.00001 6.477 2.00001 12C1.99686 14.1968 2.72005 16.3329 4.05701 18.076L4.05201 18.094L4.40701 18.507C5.3449 19.6035 6.50939 20.4836 7.82024 21.0866C9.13109 21.6897 10.5571 22.0013 12 22C12.216 22 12.4307 21.9933 12.644 21.98C14.4484 21.8662 16.1877 21.2629 17.675 20.235C18.3863 19.7443 19.031 19.1635 19.593 18.507L19.948 18.094L19.943 18.076ZM12 6C11.2044 6 10.4413 6.31607 9.87869 6.87868C9.31608 7.44129 9.00001 8.20435 9.00001 9C9.00001 9.79565 9.31608 10.5587 9.87869 11.1213C10.4413 11.6839 11.2044 12 12 12C12.7957 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7957 6 12 6Z" fill="#7F8183"/>
              </svg>
              <span className="text-[#7F8183] font-inter text-xl font-medium">My profile</span>
            </Link>

            {/* Reports */}
            <Link to="/reports" className="flex items-center p-3 mb-8">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M14.6668 10.7983L18.5535 4.07917L20.1393 4.99583L15.3452 13.2917L9.37766 9.85417L5.00516 17.4167H20.1668V19.25H1.8335V2.75H3.66683V16.0783L8.7085 7.33333L14.6668 10.7983Z" fill="#7F8183"/>
              </svg>
              <span className="text-[#7F8183] font-inter text-xl font-medium">Reports</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-[294px] h-0 bg-[#C5C5C5] border-t border-[#C5C5C5] mb-8"></div>

          {/* Others Section */}
          <div>
            <h3 className="text-[#595C5F] font-inter text-xl font-light mb-6">Others</h3>

            {/* Profile Settings - Active */}
            <div className="bg-[#F4F4F5] rounded-[10px] p-3 mb-4 flex items-center w-[294px] h-[49px]">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M21.5588 13.7148C21.3851 13.5171 21.2893 13.263 21.2893 12.9998C21.2893 12.7367 21.3851 12.4825 21.5588 12.2848L22.9455 10.7248C23.0983 10.5544 23.1931 10.3399 23.2165 10.1122C23.2399 9.88452 23.1905 9.65526 23.0755 9.45735L20.9088 5.70901C20.7949 5.51133 20.6216 5.35463 20.4134 5.26126C20.2053 5.16788 19.973 5.1426 19.7496 5.18901L17.713 5.60068C17.4538 5.65423 17.184 5.61107 16.9545 5.47935C16.725 5.34762 16.5516 5.13645 16.4671 4.88568L15.8063 2.90318C15.7336 2.68801 15.5952 2.50112 15.4105 2.36892C15.2258 2.23673 15.0042 2.16593 14.7771 2.16651H10.4438C10.2076 2.15418 9.97377 2.21952 9.77815 2.35254C9.58254 2.48556 9.43584 2.67895 9.36046 2.90318L8.75379 4.88568C8.66929 5.13645 8.49593 5.34762 8.26641 5.47935C8.0369 5.61107 7.76711 5.65423 7.50796 5.60068L5.41712 5.18901C5.20539 5.15909 4.98953 5.1925 4.79675 5.28504C4.60397 5.37757 4.44288 5.52509 4.33379 5.70901L2.16712 9.45735C2.04921 9.65305 1.9962 9.88102 2.01566 10.1087C2.03511 10.3363 2.12605 10.552 2.27546 10.7248L3.65129 12.2848C3.82497 12.4825 3.92075 12.7367 3.92075 12.9998C3.92075 13.263 3.82497 13.5171 3.65129 13.7148L2.27546 15.2748C2.12605 15.4477 2.03511 15.6634 2.01566 15.891C1.9962 16.1187 2.04921 16.3466 2.16712 16.5423L4.33379 20.2907C4.44765 20.4884 4.621 20.6451 4.82915 20.7384C5.03729 20.8318 5.2696 20.8571 5.49296 20.8107L7.52962 20.399C7.78878 20.3455 8.05857 20.3886 8.28808 20.5203C8.51759 20.6521 8.69096 20.8632 8.77546 21.114L9.43629 23.0965C9.51167 23.3207 9.65837 23.5141 9.85399 23.6472C10.0496 23.7802 10.2834 23.8455 10.5196 23.8332H14.853C15.0801 23.8338 15.3016 23.763 15.4863 23.6308C15.671 23.4986 15.8094 23.3117 15.8821 23.0965L16.543 21.114C16.6275 20.8632 16.8008 20.6521 17.0303 20.5203C17.2598 20.3886 17.5296 20.3455 17.7888 20.399L19.8255 20.8107C20.0488 20.8571 20.2811 20.8318 20.4893 20.7384C20.6974 20.6451 20.8708 20.4884 20.9846 20.2907L23.1513 16.5423C23.2663 16.3444 23.3157 16.1152 23.2923 15.8875C23.269 15.6598 23.1741 15.4453 23.0213 15.2748L21.5588 13.7148ZM19.9446 15.1665L20.8113 16.1415L19.4246 18.5465L18.1463 18.2865C17.3661 18.127 16.5544 18.2596 15.8654 18.659C15.1765 19.0584 14.6581 19.6968 14.4088 20.4532L13.9971 21.6665H11.2238L10.8338 20.4315C10.5845 19.6752 10.0661 19.0367 9.37715 18.6373C8.68817 18.2379 7.87653 18.1054 7.09629 18.2648L5.81796 18.5248L4.40962 16.1307L5.27629 15.1557C5.80924 14.5598 6.10388 13.7884 6.10388 12.989C6.10388 12.1896 5.80924 11.4182 5.27629 10.8223L4.40962 9.84735L5.79629 7.46401L7.07462 7.72401C7.85486 7.8835 8.6665 7.75097 9.35548 7.35156C10.0445 6.95216 10.5628 6.31368 10.8121 5.55735L11.2238 4.33318H13.9971L14.4088 5.56818C14.6581 6.32452 15.1765 6.96299 15.8654 7.36239C16.5544 7.7618 17.3661 7.89434 18.1463 7.73485L19.4246 7.47485L20.8113 9.87985L19.9446 10.8548C19.4177 11.4493 19.1267 12.2163 19.1267 13.0107C19.1267 13.8051 19.4177 14.572 19.9446 15.1665ZM12.6105 8.66651C11.7534 8.66651 10.9156 8.92066 10.203 9.39681C9.49037 9.87296 8.93496 10.5497 8.60698 11.3416C8.279 12.1334 8.19319 13.0047 8.36039 13.8452C8.52759 14.6858 8.9403 15.4579 9.54633 16.064C10.1524 16.67 10.9245 17.0827 11.7651 17.2499C12.6057 17.4171 13.4769 17.3313 14.2688 17.0033C15.0606 16.6753 15.7373 16.1199 16.2135 15.4073C16.6896 14.6947 16.9438 13.8569 16.9438 12.9998C16.9438 11.8506 16.4872 10.7484 15.6746 9.93572C14.8619 9.12306 13.7597 8.66651 12.6105 8.66651ZM12.6105 15.1665C12.1819 15.1665 11.763 15.0394 11.4067 14.8014C11.0504 14.5633 10.7727 14.2249 10.6087 13.829C10.4447 13.4331 10.4018 12.9974 10.4854 12.5772C10.569 12.1569 10.7754 11.7708 11.0784 11.4678C11.3814 11.1648 11.7675 10.9584 12.1878 10.8748C12.6081 10.7912 13.0437 10.8341 13.4396 10.9981C13.8355 11.1621 14.1739 11.4398 14.412 11.7961C14.6501 12.1524 14.7771 12.5713 14.7771 12.9998C14.7771 13.5745 14.5489 14.1256 14.1425 14.5319C13.7362 14.9382 13.1851 15.1665 12.6105 15.1665Z" fill="#381FD1"/>
              </svg>
              <span className="text-[#381FD1] font-inter text-xl font-medium">Profile Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white border-b border-[#DEE5ED] px-24 py-8 h-[137px]">
          <div className="flex items-center">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/1ae64bb127a8720e83bb138afd16a02600c4c0c4?width=88" alt="Pinterin Logo" className="w-11 h-11 mr-3" />
            <span className="text-[#10284B] font-dm-sans text-xl font-bold">Pinterin</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
              <svg width="29" height="41" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.63292 0.375711C7.0789 -0.994817 2.04531 1.65337 0.599314 3.98474C-0.0448777 5.02798 0.000700393 5.77979 0.000700393 6.20632V29.0254L18.8769 41L22.4265 39.024V16.8011L3.04568 5.4566C4.0857 4.12216 6.42473 2.49493 8.17858 3.14847L25.4414 12.5613L25.4414 37.3178L29 35.3383V10.5824L9.63292 0.375711Z" fill="black"/>
              </svg>
              <span className="text-black font-poppins text-2xl font-semibold">User</span>
              <div className="w-16 h-16 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                <span className="text-black font-poppins text-2xl font-bold">U</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-8">
          <h1 className="text-[#10284B] font-inter text-2xl font-bold mb-8">Account Settings</h1>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] inline-flex w-[253px] h-[42px] relative">
              {/* Account Tab - Active */}
              <button 
                onClick={() => setActiveTab('account')}
                className={`rounded-[10px] w-[132px] h-[42px] flex items-center justify-center transition-colors ${
                  activeTab === 'account' ? 'bg-[#10284B]' : 'bg-transparent'
                }`}
              >
                <span className={`font-roboto text-base font-medium text-center ${
                  activeTab === 'account' ? 'text-white' : 'text-[#595C5F]'
                }`}>Account</span>
              </button>
              {/* Orders Tab */}
              <button 
                onClick={() => setActiveTab('orders')}
                className={`rounded-[10px] w-[121px] h-[42px] flex items-center justify-center transition-colors ${
                  activeTab === 'orders' ? 'bg-[#10284B]' : 'bg-transparent'
                }`}
              >
                <span className={`font-roboto text-base font-medium text-center ${
                  activeTab === 'orders' ? 'text-white' : 'text-[#595C5F]'
                }`}>Orders</span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          {activeTab === 'account' && (
            <div className="bg-white rounded-[17px] shadow-[0_0_6px_0_rgba(0,0,0,0.25)] p-8 w-[1205px] h-[522px]">
              <h2 className="text-[#10284B] font-roboto text-lg font-medium mb-8">Account Information</h2>
              
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full h-[40px] px-4 border-2 border-[#C5C5CF] rounded-[7px] bg-white text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">Phone Number</label>
                    <input
                      type="text"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="w-full h-[40px] px-4 border-2 border-[#C5C5CF] rounded-[7px] bg-white text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>

                  {/* Parent Email */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">Parent Email</label>
                    <input
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                      className="w-full h-[40px] px-4 border-2 border-[#C5C5CF] rounded-[7px] bg-white text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Last Name */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full h-[40px] px-4 border-2 border-[#C5C5CF] rounded-[7px] bg-white text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">Birth Date</label>
                    <input
                      type="text"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      placeholder="DD/MM/YY"
                      className="w-full h-[40px] px-4 border-2 border-[#C5C5CF] rounded-[7px] bg-white text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>
                </div>
              </div>

              {/* Save Changes Button */}
              <div className="mt-12">
                <button
                  onClick={handleSaveChanges}
                  className="bg-[#381FD1] text-white font-roboto text-base font-medium px-8 py-3 rounded-[6px] h-[41px] w-[170px] flex items-center justify-center gap-3 hover:bg-[#2d1aa0] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H16.175C16.4417 3 16.696 3.05 16.938 3.15C17.18 3.25 17.3923 3.39167 17.575 3.575L20.425 6.425C20.6083 6.60833 20.75 6.821 20.85 7.063C20.95 7.305 21 7.559 21 7.825V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM7 10H14C14.2833 10 14.521 9.904 14.713 9.712C14.905 9.52 15.0007 9.28267 15 9V7C15 6.71667 14.904 6.47933 14.712 6.288C14.52 6.09667 14.2827 6.00067 14 6H7C6.71667 6 6.47933 6.096 6.288 6.288C6.09667 6.48 6.00067 6.71733 6 7V9C6 9.28333 6.096 9.521 6.288 9.713C6.48 9.905 6.71733 10.0007 7 10Z" fill="white"/>
                  </svg>
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-[17px] shadow-[0_0_6px_0_rgba(0,0,0,0.25)] p-12 w-[1205px] h-[522px] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-[#10284B] font-roboto text-lg font-medium mb-2">No orders found</h3>
                <p className="text-[#595C5F] font-roboto text-sm">You haven't placed any orders yet.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
