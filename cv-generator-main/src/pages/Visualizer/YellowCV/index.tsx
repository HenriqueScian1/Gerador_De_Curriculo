import {Page, Text, View, Document, StyleSheet, PDFViewer, Font, Link, Line} from '@react-pdf/renderer';
import Inter from "../../../assets/fonts/Inter/Inter-Regular.ttf"
import InterMedium from "../../../assets/fonts/Inter/Inter-Medium.ttf"
import InterLight from "../../../assets/fonts/Inter/Inter-Light.ttf"
import InterSemiBold from "../../../assets/fonts/Inter/Inter-SemiBold.ttf"
import InterBold from "../../../assets/fonts/Inter/Inter-Bold.ttf"
import {useAppSelector} from '../../../store/hooks';
import {
    getHobbies,
    getLanguages,
    getPersonalInfo,
    getProfessionalHistory,
    getProfessionalSummary,
    getSkills,
    getWebsites
} from '../../../store/reducers/cv.reducer';
import * as Constants from "../../../common/constants"

const YellowCV = () => {
    const personalInfo = useAppSelector(getPersonalInfo)
    const professionalSummary = useAppSelector(getProfessionalSummary)
    const professionalHistory = useAppSelector(getProfessionalHistory)
    const websites = useAppSelector(getWebsites)
    const skills = useAppSelector(getSkills)
    const languages = useAppSelector(getLanguages)
    const hobbies = useAppSelector(getHobbies)

    Font.register({
        family: 'Inter', fonts: [
            {src: Inter},
            {src: InterLight, fontWeight: 300},
            {src: InterMedium, fontWeight: 500},
            {src: InterSemiBold, fontWeight: 600},
            {src: InterBold, fontWeight: 700},
        ]
    });

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter',
            color: '#262B33',
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
            boxSizing: 'border-box',
        },
        section: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '0 20px',
            marginTop: 5
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        backdropContainer: {
            backgroundColor: '#F6EEE3',
            transform: 'scale(1.3)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            marginTop: -10
        },
        topContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
        },
        bottomContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            color: '#000',
        },
        wrapperDetails: {
            display: 'flex',
            flexDirection: 'column',
            gap: 5
        },
        wrapperSkills: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 5,
            marginLeft: 20,
        },
        wrapperLinks: {
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginLeft: 20,
        },
        cvContent: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
            paddingLeft: 20,
        },
        professionalHistory: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 20,
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        professionalHistoryItem: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
        },
        fullname: {
            fontSize: 18,
            textTransform: 'uppercase',
            fontWeight: 500,
        },
        website: {
            fontSize: 11,
            fontWeight: 600,
        },
        phoneNumber: {
            fontSize: 11,
            fontWeight: 600,
        },
        cityCountry: {
            fontSize: 9,
            fontWeight: 400,
            marginLeft: 20,
            marginTop: -10
        },
        titleProfile: {
            fontSize: 20,
            fontWeight: 600,
        },
        titleSectionItems: {
            fontSize: 11,
            fontWeight: 600,
            marginBottom: 5,
        },
        titleBottomLeft: {
            fontSize: 11,
            fontWeight: 600,
            marginBottom: 5,
            width: '168px'
        },
        contentSectionItems: {
            fontSize: 10,
            fontWeight: 400,
            opacity: .8
        },
        resumeText: {
            fontSize: 24,
            fontWeight: 500,
            marginBottom: 30
        },
        linkItem: {
            color: '#299AF3',
            textDecoration: 'none'
        },
        dateItem: {
            fontSize: 9,
            marginTop: 7,
            fontWeight: 400,
        },
        titleLeftItem: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 5
        },
        titleLeftItemProfessionalSummary: {
            fontSize: 10,
            fontWeight: 500,
            marginBottom: 10
        }
    });

    return (
        <PDFViewer style={{minHeight: '100%', width: '100%'}}>
            <Document>
                <Page
                    size="A4"
                    style={styles.page}
                    wrap={true}
                >
                    <View style={styles.container}>
                        <View style={{position: 'relative'}}>
                            <View style={styles.backdropContainer}/>
                            <View style={styles.topContainer}>
                                <View style={styles.header}>
                                    <View style={styles.section}>
                                        <Text
                                            style={styles.fullname}>{personalInfo.firstName}{" "}{personalInfo.lastName}</Text>
                                        <Text style={styles.phoneNumber}>{personalInfo.email}</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <Text style={styles.website}>{personalInfo.title}</Text>
                                        <Text style={styles.phoneNumber}>{personalInfo.phoneNumber}</Text>
                                    </View>
                                </View>

                                <Line
                                    x1={0} y1={0} x2={500} y2={0}
                                    style={{
                                        marginTop: 20,
                                        marginLeft: 20,
                                        marginRight: 20,
                                        marginBottom: 20,
                                        borderBottom: '2px solid #000'
                                    }}
                                />

                                <Text
                                    style={styles.cityCountry}
                                >
                                    {personalInfo.city}{", "}{personalInfo.country}
                                </Text>

                                <View style={styles.cvContent}>
                                    <Text style={styles.resumeText}>
                                        {professionalSummary.description}
                                    </Text>
                                </View>

                                {skills.length > 0 && (
                                    <View style={{display: 'flex', flexDirection: 'column'}}>
                                        <Text
                                            style={[styles.titleBottomLeft, {paddingLeft: 20}]}
                                        >
                                            Habilidades
                                        </Text>
                                        <View style={styles.wrapperSkills}>
                                            {skills.map((item, index) => (
                                                <Text key={index} style={styles.contentSectionItems}>{item}</Text>
                                            ))}
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            {websites.length > 0 && (
                                <View style={styles.wrapperLinks}>
                                    <Text
                                        style={styles.titleBottomLeft}
                                    >
                                        Links
                                    </Text>
                                    {websites.map((item, index) => (
                                        <Link
                                            key={index}
                                            src={item.url}
                                            style={[styles.contentSectionItems, styles.linkItem]}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </View>
                            )}

                            <Line
                                x1={0} y1={0} x2={500} y2={0}
                                style={{
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderBottom: '2px solid #999'
                                }}
                            />

                            <View style={styles.professionalHistory}>
                                <Text style={styles.titleLeftItemProfessionalSummary}>Histórico Profissional</Text>
                                {professionalHistory.map((item, index) => (
                                    <View key={index} style={styles.professionalHistoryItem}>
                                        <View style={{width: "37%"}}>
                                            <Text style={{
                                                fontSize: 12,
                                                fontWeight: 600
                                            }}>{item.company}, {item.position}</Text>
                                            <Text
                                                style={styles.dateItem}>{item.startDate} - {item.endDate !== '' ? item.endDate : 'Atual'}</Text>
                                        </View>
                                        <View style={{width: "60%"}}>
                                            <Text style={styles.contentSectionItems}>
                                                {item.description}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>

                            <Line
                                x1={0} y1={0} x2={500} y2={0}
                                style={{
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderBottom: '2px solid #999'
                                }}
                            />

                            {languages.length > 0 && (
                                <View style={styles.wrapperLinks}>
                                    <Text style={styles.titleBottomLeft}>Linguagens</Text>
                                    {languages.map((item, index) => (
                                        <Text key={index} style={styles.contentSectionItems}>
                                            {item.language} ({Constants.LEVEL_LANGUAGE[item.level as keyof typeof Constants.LEVEL_LANGUAGE]})
                                        </Text>
                                    ))}
                                </View>
                            )}

                            <Line
                                x1={0} y1={0} x2={500} y2={0}
                                style={{
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderBottom: '2px solid #999'
                                }}
                            />

                            {hobbies.description !== "" && (
                                <View style={styles.wrapperLinks}>
                                    <Text style={styles.titleBottomLeft}>Hobbies</Text>
                                    <Text style={[styles.contentSectionItems, {maxWidth: 250}]}>{hobbies.description}</Text>
                                </View>
                            )}
                        </View>
                    </View>

                </Page>
            </Document>
        </PDFViewer>
    )
}

export default YellowCV
