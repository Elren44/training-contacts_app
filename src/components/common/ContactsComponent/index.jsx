import React from 'react'
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {AppModal} from "../AppModal";
import Message from "../Message";
import colors from "../../../assets/theme/colors";
import {Icon} from "../Icon";
import styles from "./styles";

const defaultAvatar = "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg"
export const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {

	const ListEmptyComponent = () => {
		return (
			<View style={{padding: 100}}>
				<Message info message={"Нет данных."}/>
			</View>
		)
	}

	const renderItem = ({item}) => {
		console.log("item >>", item)
		const {contact_picture, first_name, last_name, phone_number} = item;
		return (
			<TouchableOpacity style={styles.contactItemContainer}>
				<View style={styles.contactItem}>
					{contact_picture ?
						<Image style={styles.contactItemAvatar} source={{uri: contact_picture}}/> :
						<Image style={styles.contactItemAvatar} source={{uri: defaultAvatar}}/>
					}

					<View><Text>{first_name} {last_name}</Text></View>
					<Text>{phone_number}</Text>

				</View>
				<Icon name={"angle-right"} type={"fontisto"}/>
			</TouchableOpacity>
		)
	}
	return (
		<View>
			<AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} title="Мой профиль!"
			          modalBody={<View>
				          <Text>длфыдлвалорфыдаор</Text>
			          </View>}
			          modalFooter={<></>}
			/>

			{loading && <View style={{padding: 100}}><ActivityIndicator size={"large"} color={colors.primary}/></View>}
			{!loading &&
				<View style={{paddingVertical: 20}}>
					<FlatList data={data} keyExtractor={(item) => String(item.id)} ListEmptyComponent={ListEmptyComponent}
					          renderItem={renderItem}
					          ListFooterComponent={<View style={{height: 100}}></View>}
					/>
				</View>
			}
		</View>
	);
}
