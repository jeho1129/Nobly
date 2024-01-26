import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import { UserInfoT, LunarSolar } from './SignUpType';

function Birthday() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfoT>({
    userId: '',
    userName: '',
    password: '',
    lunarSloar: LunarSolar.Solar,
    birth: '',
    oldUserId: [],
  });

  // location.state가 유효한 객체일 경우 userInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as UserInfoT);
    } else {
      setUserInfo({
        userId: '',
        userName: '',
        password: '',
        lunarSloar: LunarSolar.Solar,
        birth: '',
        oldUserId: [],
      });
    }
  }, [location.state]);

  const handleBackBtn = () => {
    navigate('/sign-up/password', { state: userInfo });
  };

  // '음력' 또는 '양력' 선택 시 setUserInfo를 사용하여 userInfo.lunarSloar 필드를
  // LunarSolar.Lunar 또는 LunarSolar.Solar로 설정
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setUserInfo({ ...userInfo, lunarSloar: LunarSolar.Lunar });
    } else if (selected === 'right') {
      setUserInfo({ ...userInfo, lunarSloar: LunarSolar.Solar });
    }
  };

  // birthday 입력필드가 변할 때마다 setUserInfo 사용하여 값을 새롭게 할당
  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setUserInfo({ ...userInfo, birth: value });
    }
  };

  const handleSubmit = () => {
    navigate('/senior-connect');
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>회원가입</MenuTitleStyle>
          <ToggleBtn
            optionLeft="음력"
            optionRight="양력"
            initType={
              userInfo.lunarSloar === LunarSolar.Lunar ? 'left' : 'right'
            }
            onToggle={handleToggle}
          />
          <InputBoxStyle
            name="birth"
            type="date"
            style={{ marginTop: '20px' }}
            onChange={Changebirth}
            value={userInfo.birth}
          />
        </FlexBoxStyle>
        <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default Birthday;
