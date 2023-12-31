import styled from 'styled-components'
import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import Toptext from '@/components/common/Toptext/TopText'

const Contact = () => {
  return (
    <div>
      <Toptext date={false} text='お問い合わせ' variant='title' />
      <TextFormContiner>
        <div>
          <Input label='*お名前' placeholder='名前を入力（必須）' variant='textInput' />
        </div>
        <div>
          <Input
            label='*E-mail'
            placeholder='返信用メールアドレスを入力（必須）'
            variant='textInput'
          />
        </div>
        <div>
          <Input label='件名' placeholder='件名を入力' variant='textInput' />
        </div>
        <div className='textarea-form'>
          <Input label='*本文' placeholder='本文を入力（必須）' variant='contactTextarea' />
        </div>
        <div className='button-container'>
          <Button label='送信' color='register' size='medium' />
        </div>
      </TextFormContiner>
    </div>
  )
}

export default Contact

const TextFormContiner = styled.div`
  margin: 4vh 0 0 0;
  div {
    margin-bottom: 2vh;
  }
  .textarea-form {
    margin-top: 5vh;
  }
  .button-container {
    text-align: right;
    margin-right: 12vw;
    margin-top: 4vh;
  }
`
