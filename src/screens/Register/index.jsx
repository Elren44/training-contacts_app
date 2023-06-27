import {RegisterComponent} from "../../components/RegisterComponent";
import {useState} from "react";
import {values} from "@babel/runtime/regenerator";

const Register = () => {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const onChange = ({name, value}) => {
		setForm({...form, [name]: value});

		if (value !== "") {
			if (name === "password" && form.password) {
				checkAndAddError(form.password.length < 6, "password", "Пароль не может быть меньше 6 символов")
				if (form.password.length >= 6) {
					deleteError("password")
				}
			} else {
				deleteError(name)
			}
		} else {
			setErrors((prev) => {
				return {
					...prev, [name]: "Это поле обязательное"
				}
			})
		}
	}

	const checkAndAddError = (condition, name, text) => {
		if(condition) {
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
		console.log("form >> ", form)
		//validations
		checkAndAddError(!form["userName"],"userName", "Пожалуйста введите ваш ник")
		checkAndAddError(!form["firstName"],"firstName", "Пожалуйста введите ваше имя")
		checkAndAddError(!form["lastName"], "lastName", "Пожалуйста введите вашу фамилию")
		checkAndAddError(!form["email"],"email", "Пожалуйста введите вашу почту")
		checkAndAddError(!form["password"],"password", "Пожалуйста введите ваш пароль")



	}

	return (
		<RegisterComponent onSubmit={onSubmit} form={form} errors={errors} onChange={onChange}/>
	);
};

export default Register;
