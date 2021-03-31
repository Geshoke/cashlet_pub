import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import MoreIcon from 'react-native-vector-icons/AntDesign';
import SnackBar from 'react-native-snackbar-component'

export const FirstScreen = () => {
    const windowHeight = useWindowDimensions().height
    const [isSnackBar, setisSnackBar] = React.useState(false)
    const [snackMessage, setsnackMessage] = React.useState("This is an in-app notification snackbar to show to the user when they perform an action. Clicking it should change the text.")

    React.useEffect(() => {
        if (isSnackBar == false) {
            setsnackMessage("This is an in-app notification snackbar to show to the user when they perform an action. Clicking it should change the text.")

        }
    }, [isSnackBar])

    return (
        <View style={{ flex: 1, backgroundColor: "#4A5D80" }}>
            <View style={{
                marginHorizontal: 20,
                marginTop: 10

            }}>
                <SnackBar
                    containerStyle={{
                        borderRadius: 10
                    }}
                    backgroundColor="#E91780"
                    visible={isSnackBar}
                    textMessage={snackMessage}
                    position={"top"}
                    actionHandler={() => {
                        setisSnackBar(!isSnackBar)
                        // setsnackMessage("")

                    }}
                    messageActionHandler={() => {
                        setsnackMessage("User clicked snackbar")
                        // console.log("pressed")
                    }}
                    actionText="let's go" />
            </View>

            <View style={{
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 10,
                flex: 1,
                // height: windowHeight / 3.5
            }}>
                <Text style={{ color: "#ffffff", fontSize: 30 }}>
                    Afternoon Jo
                 </Text>
                <Text style={{
                    color: "#FFFFFF", fontSize: 17
                }}>
                    Here's the latest
                </Text>

                <View style={{ paddingTop: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 34,
                        color: "#41E771"
                    }}>
                        Kes 42,000
                    </Text>

                    <Text style={{ color: "white", fontWeight: "100", fontSize: 17 }}>
                        Total funds
                    </Text>
                </View>
            </View>

            <View style={{
                flex: 3,
                backgroundColor: "#F8F9FF",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                padding: 20
            }}>
                <Text style={{ color: "#4B5E81", fontWeight: "bold" }}>
                    Your Goals
                </Text>

                <View style={{
                    backgroundColor: "#FFFFFF",
                    elevation: 3,
                    // padding:20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 10
                }}>
                    <View style={{ marginVertical: 20, marginLeft: 20 }}>
                        <Text style={{ color: "#4B5E81", fontWeight: "bold" }}>
                            Goal 1
                         </Text>

                        <Text style={{ color: "grey" }}>
                            Kes 12,000
                         </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ alignSelf: "center" }}>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderRadius: 7,
                                backgroundColor: "#41E771"
                            }}>
                                <Text style={{ color: "white" }}>
                                    Finish Goal
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            borderColor: "grey",
                            marginLeft: 10,
                            borderLeftWidth: 1,
                            alignContent: "center"
                        }} />

                        <TouchableOpacity style={{
                            justifyContent: "center",
                        }}>
                            <MoreIcon name="right" size={30} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginTop: 20,
                    backgroundColor: "#FFFFFF",
                    elevation: 3,
                    // padding:20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 10
                }}>
                    <View style={{ marginVertical: 20, marginLeft: 20 }}>
                        <Text style={{ color: "#4B5E81", fontWeight: "bold" }}>
                            Goal 2
                         </Text>

                        <Text style={{ color: "grey" }}>
                            Kes 12,000
                         </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ alignSelf: "center" }}>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderRadius: 7,
                                backgroundColor: "#41E771"
                            }}>
                                <Text style={{ color: "white" }}>
                                    Finish Goal
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{
                            borderColor: "grey",
                            marginLeft: 10,
                            borderLeftWidth: 1,
                            alignContent: "center"
                        }} />

                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                            }}>
                            <MoreIcon name="right" size={30} color="grey" />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <TouchableOpacity
                        onPress={() => {
                            setisSnackBar(true)
                        }}
                        style={{
                            borderRadius: 25,
                            paddingVertical: 10,
                            alignItems: "center",
                            backgroundColor: "#3DE770"
                        }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
                            Show Snackbar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    Goalcards: {

    }
});
