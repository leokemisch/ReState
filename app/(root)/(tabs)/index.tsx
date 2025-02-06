import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="font-bold my-10 font-rubik text-3xl">
                Welcome to ReState
            </Text>

            <Link href={{pathname: "/sign-in"}}>Sign In</Link>
            <Link href={{pathname: "/explore"}}>Explore</Link>
            <Link href={{pathname: "/profile"}}>Profile</Link>
            <Link href={{pathname: "/properties/[id]", params: {id: "1"}}}>Property</Link>
        </View>
    );
}

