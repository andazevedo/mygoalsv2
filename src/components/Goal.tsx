import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Progress } from "@/components/Progress"
import { currencyFormat } from "@/utils/currencyFormat"
import { MaterialIcons } from "@expo/vector-icons"
import { View } from "react-native"

export type GoalProps = {
  name: string
  current: number
  total: number
}

type Props = TouchableOpacityProps & {
  goal: GoalProps
  onDelete: () => void 
}

export function Goal({ goal, onDelete, ...rest }: Props) {
  const percentage = (goal.current / goal.total) * 100

  return (
    <View className="flex-1 bg-gray-500 flex-row">
       <TouchableOpacity
       className="p-4 h-44 w-40"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-white font-bold text-lg mb-3">{goal.name}</Text>
      <Text className="text-white font-semiBold text-sm">
        {currencyFormat(goal.current)}
      </Text>

      <Text className="text-gray-300 font-regular text-sm flex-1">
        {currencyFormat(goal.total)}
      </Text>

      <Progress percentage={percentage} />
    </TouchableOpacity>
    <TouchableOpacity 
    className="pt-2 mr-2" 
    activeOpacity={0.7}
    onPress={onDelete}
    >
      <MaterialIcons name="delete" color={"white"} size={18}/>
    </TouchableOpacity>
    
    </View>
   
  )
}
