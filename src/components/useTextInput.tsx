import { TextInput } from "react-native"

interface inputText {
  name: string,
  value: string,
  placeholder: string,
  onChangeText(text: string): any
  // style: {styles: string}
}


export const useTextInput: React.FC<inputText> = (props) => {
  return (
    <TextInput
      {...props}
    />
  )
}

