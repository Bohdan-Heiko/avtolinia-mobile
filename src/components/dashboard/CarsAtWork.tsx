import { View, StyleSheet, Text, TextInput, TouchableOpacity, } from "react-native"




export const CarsAtWork: React.FC = () => {
  return (
    <View style={stl.carsInWork_container}>
      <View style={stl.title_container}>
        <Text style={stl.title}>Машины в работе</Text>
      </View>
      <TextInput
        style={stl.findCar}
        placeholder="Номер"
      />

      <View style={stl.work_container}>
        <View style={stl.clientData}>
          <Text style={stl.clientName}>КЛИЕНТ: Дмитрий (380951234567)</Text>
          <TouchableOpacity style={stl.clentTel}>
            <Text style={stl.clientCallBtn}>Позвонить</Text>
          </TouchableOpacity>
        </View>

        <View style={stl.clientData}>
          <Text style={stl.clientName}>МАСТЕР: Адексей (380503222322)</Text>
          <TouchableOpacity style={stl.clentTel}>
            <Text style={stl.clientCallBtn}>Позвонить</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={stl.typeWork}>Примечание:</Text>
          <Text style={stl.description}>ТО + шиномонтаж + помыть ТО +
            шиномонтаж + помытьТО + шиномонтаж ТО +
            шиномонтаж + помыть ТО + шиномонтаж + помытьТО
          </Text>
        </View>

        <View>
          <Text style={stl.typeWork}>Выполненые работы</Text>
          <Text style={stl.description}>·Замена масла</Text>
          <Text style={stl.description}>·замена фильтров салона</Text>
        </View>

        <View>
          <Text style={stl.typeWork}>Сейчас в работе</Text>
          <Text style={stl.description}>Замена масла</Text>
        </View>

        <View style={stl.finalCost_container}>
          <Text style={stl.finalCostTitle}>К оплате:</Text>
          <Text style={stl.finalCostTitle}>1750 грн</Text>

          <TouchableOpacity>
            <Text style={stl.finalCostBtn}>Выдать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



export const stl = StyleSheet.create({
  carsInWork_container: {
    height: 800,
    width: '100%',
    // backgroundColor: '#b2d4da',
    paddingTop: 15,
    alignItems: 'center'
  },
  title_container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  },
  findCar: {
    width: '75%',
    fontSize: 15,
    borderWidth: 1,
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
    // marginLeft: 20
    marginRight: 50
  },
  work_container: {
    width: '95%',
    backgroundColor: '#F2F7FF',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15
  },
  clientData: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  clientName: {
    fontSize: 15,
    marginTop: 4
  },
  clentTel: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  clientCallBtn: {
    fontSize: 16,
  },
  typeWork: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  finalCost_container: {
    flexDirection: 'row',
  },
  finalCostTitle: {
    fontSize: 19,
    color: '#FF7212',
  },
  finalCostBtn: {
    marginLeft: 100,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
})