import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export const Sample = () => {
  const [value, setValue] = useState('')
  const [fixedValue, setFixedValue] = useState(value)

  return (
    <View>
      <TextInput onChangeText={setValue} style={styles.input} />
      <Button onPress={() => setFixedValue(value)} title="Fix!" />
      <View style={styles.valueContainer}>
        <Text>value: {value}</Text>
        <Text>fixedValue: {fixedValue}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  valueContainer: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
})
