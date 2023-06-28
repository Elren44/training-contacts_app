import {RegisterComponent} from "../../components/RegisterComponent";
import {useCallback, useContext, useEffect, useState} from "react";
import registerAction, {clearAuthState} from "../../context/actions/auth/register";
import {GlobalContext} from "../../context/Provider";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {LOGIN} from "../../constants/routeNames";

const Register = () => {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const {navigate} = useNavigation()
	const {
		authDispatch,
		authState: {error, loading, data},
	} = useContext(GlobalContext);

	useFocusEffect(
		useCallback(() => {
			// console.log("1111111111")
			return () => {
				// console.log("2222222")
				if (data || error) {
					// clearAuthState()(authDispatch);
				}
			};
		}, [data, error]),
	);

	useEffect(() => {
		return () => {
			clearAuthState()(authDispatch);
		};
	}, []);



	// console.log("authState ", form?.password.length)
	const onChange = ({name, value}) => {
		setForm({...form, [name]: value});

		if (value !== "") {
			deleteError(name)
			if (name === "password") {
				if (value.length < 6) {
						setErrors((prev) => {
							return {
								...prev, password: "Пароль не может быть меньше 6 символов"
							}
						})
					} else {
					deleteError("password")
				}

			}
		} else {
			setErrors((prev) => {
				return {
					...prev, [name]: "Это поле обязательное"
				}
			})
		}
	}


	const checkAndAddError = (name, text) => {
		if (!form[name]) {
			setErrors((prev) => {
				return {
					...prev, [name]: text
				}
			})
		}
	}
	const deleteError = (name) => {
		setErrors((prev) => {
			return {
				...prev, [name]: null
			}
		})
	}

	const onSubmit = () => {
		// console.log("errors >> ", error)
		//validations
		checkAndAddError( "userName", "Пожалуйста введите ваш ник")
		checkAndAddError( "firstName", "Пожалуйста введите ваше имя")
		checkAndAddError( "lastName", "Пожалуйста введите вашу фамилию")
		checkAndAddError( "email", "Пожалуйста введите вашу почту")
		checkAndAddError( "password", "Пожалуйста введите ваш пароль")

		if (
			Object.values(form).length === 5 &&
			Object.values(form).every((item) => item.trim().length > 0) &&
			Object.values(errors).every((item) => !item)
		) {
				// console.log("before", errors)
			registerAction(form)(authDispatch)
			// console.log("after", error)
		}

	}



	return (
		<RegisterComponent onSubmit={onSubmit} form={form} errors={errors} error={error} loading={loading}
		                   onChange={onChange}/>
	);
};

export default Register;
