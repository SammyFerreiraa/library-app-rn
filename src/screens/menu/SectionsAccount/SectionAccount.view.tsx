import { Divisor } from '@/components'
import ItemSection from '@/components/ItemSection'
import { FontAwesome6, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import useSectionAccountModel from './SectionAccount.model'

const SectionAccountView = ({
  signOut,
}: ReturnType<typeof useSectionAccountModel>) => {
  return (
    <View className="mx-4" style={{ gap: 25 }}>
      <ItemSection>
        <ItemSection.Icon>
          <FontAwesome6 name="user-circle" size={24} color="white" />
        </ItemSection.Icon>
        <ItemSection.Title title="Detalhes do perfil" />
      </ItemSection>
      <ItemSection>
        <ItemSection.Icon>
          <FontAwesome6 name="credit-card" size={24} color="white" />
        </ItemSection.Icon>
        <ItemSection.Title title="Pagamento" />
      </ItemSection>
      <ItemSection>
        <ItemSection.Icon>
          <FontAwesome5 name="star" size={24} color="white" />
        </ItemSection.Icon>
        <ItemSection.Title title="Assinatura" />
      </ItemSection>
      <Divisor className="mx-0" />
      <ItemSection>
        <ItemSection.Icon>
          <FontAwesome6 name="question-circle" size={24} color="white" />
        </ItemSection.Icon>
        <ItemSection.Title title="FAQs" />
      </ItemSection>
      <ItemSection onPress={signOut}>
        <ItemSection.Icon>
          <MaterialIcons name="logout" size={24} color="white" />
        </ItemSection.Icon>
        <ItemSection.Title title="Sair da conta" />
      </ItemSection>
    </View>
  )
}

export default SectionAccountView
