import { Image, TouchableOpacity, View } from "react-native";
import { TextInput, Button, Icon, Text, HelperText } from "react-native-paper";
import MyStyles from "../../styles/MyStyles";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from "react-native-gesture-handler";

const Register = () => {
    const info = [{
        label: "Tên",
        field: "firts_name",
        secureTextEntry: false,
        icon: "text"
    }, {
        label: "Họ và tên lót",
        field: "last_name",
        secureTextEntry: false,
        icon: "text"
    }, {
        label: "Tên đăng nhập",
        field: "username",
        secureTextEntry: false,
        icon: "text"
    }, {
        label: "Mật khẩu",
        field: "password",
        secureTextEntry: true,
        icon: "eye"
    }, {
        label: "Xác nhận mật khẩu",
        field: "comfirmpassword",
        secureTextEntry: true,
        icon: "eye"
    },]

    const [user, setUser] = useState({});
    const [asg, setMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const setState = (value, field) => {
        setUser({ ...user, [field]: value })
    }

    const pick = async () => {
        let { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Permissions denied!");
        } else {
            const result =
                await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled)
                setState(result.assets[0], "avatar")
        }
    }

    const validate = () => {
        console.info(user);
        if(user === {})
            setMsg("Vui lòng nhập thông tin!");
        for( let key in user)
            if(key in user[key] ===''){
                setMsg(`Vui lòng nhập ${key}!`);
                return false;
            }
        return true;
    }

    const register = async () => {
        if(validate() === true){
            try{
                setLoading(true);
            }catch{
    
            }finally{
    
            }
        }
    }

    return (
        <ScrollView>
            <HelperText style={MyStyles.m} type="error" visible={msg}>
            {msg}
                Email address is invalid!
            </HelperText>
            {info.map(i => <TextInput value={user[i.field]} onChangeText={t => setState(t, i.field)} style={MyStyles.m} key={`${i.label}${i.field}`} label={i.label} secureTextEntry={i.secureTextEntry} right={<TextInput.Icon icon={i.icon} />} />)}
            <TouchableOpacity style={MyStyles.m} onPress={pick}>
                <Text>Chọn ảnh đại diện...</Text>
            </TouchableOpacity>

            {user.avatar && <Image source={{ uri: user.avatar.uri }} style={MyStyles.avatar} />}

            <Button onPress={register} disabled={loading} loading={loading} mode='contained'>Đăng ký</Button>

        </ScrollView>
    );
}

export default Register;