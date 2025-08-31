import { Page, Text, View, Document, StyleSheet, PDFViewer, Font, Link } from '@react-pdf/renderer';
import Inter from "../../../assets/fonts/Inter/Inter-Regular.ttf"
import InterMedium from "../../../assets/fonts/Inter/Inter-Medium.ttf"
import InterLight from "../../../assets/fonts/Inter/Inter-Light.ttf"
import InterSemiBold from "../../../assets/fonts/Inter/Inter-SemiBold.ttf"
import InterBold from "../../../assets/fonts/Inter/Inter-Bold.ttf"
import { useAppSelector } from '../../../store/hooks';
import { getHobbies, getLanguages, getPersonalInfo, getProfessionalHistory, getProfessionalSummary, getSkills, getWebsites } from '../../../store/reducers/cv.reducer';
import * as Constants from "../../../common/constants"

const SimpleCV = () => {
    const personalInfo = useAppSelector(getPersonalInfo)
    const professionalSummary = useAppSelector(getProfessionalSummary)
    const professionalHistory = useAppSelector(getProfessionalHistory)
    const websites = useAppSelector(getWebsites)
    const skills = useAppSelector(getSkills)
    const languages = useAppSelector(getLanguages)
    const hobbies = useAppSelector(getHobbies)

    Font.register({
        family: 'Inter', fonts: [
            { src: Inter },
            { src: InterLight, fontWeight: 300 },
            { src: InterMedium, fontWeight: 500 },
            { src: InterSemiBold, fontWeight: 600 },
            { src: InterBold, fontWeight: 700 },
        ]
    });

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter',
            color: '#262B33',
            marginLeft: 10,
            marginRight: 10,
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0 20px',
            marginTop: 20,
            justifyContent: 'center'
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        leftContainer: {
            width: '65%',
            display: 'flex',
            flexDirection: 'column',
        },
        rightContainer: {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 20,
            paddingRight: 20
        },
        wrapperDetails: {
            display: 'flex',
            flexDirection: 'column',
            gap: 5
        },
        wrapperLinks: {
            display: 'flex',
            flexDirection: 'column',
            gap: 5
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
            marginTop: 20,
            paddingLeft: 20,
        },
        professionalHistoryItem: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 10,
        },
        fullname: {
            fontSize: 25,
            fontWeight: 500,
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
        contentSectionItems: {
            fontSize: 10,
            fontWeight: 400,
            opacity: .8
        },
        linkItem: {
            color: '#299AF3',
            textDecoration: 'none'
        },
        dateItem: {
            fontSize: 8,
            fontWeight: 400,
            opacity: .5,
            marginTop: -5,
            marginBottom: 5,
        },
        titleLeftItem: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 5
        },
        titleLeftItemProfessionalSummary: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 10
        }
    });

    return (
        <PDFViewer style={{ minHeight: '100%', width: '100%' }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.fullname}>{personalInfo.firstName}{" "}{personalInfo.lastName}</Text>
                        <Text style={styles.contentSectionItems}>{personalInfo.title}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <View style={styles.cvContent}>
                                <Text style={styles.titleLeftItem}>Resumo</Text>
                                <Text style={styles.contentSectionItems}>
                                    {professionalSummary.description}
                                </Text>
                            </View>
                            <View style={styles.professionalHistory}>
                                <Text style={styles.titleLeftItemProfessionalSummary}>Histórico Profissional</Text>
                                {professionalHistory.map((item, index) => (
                                    <View key={index} style={styles.professionalHistoryItem}>
                                        <Text style={styles.titleSectionItems}>{item.company}, {item.position}</Text>
                                        <Text style={styles.dateItem}>{item.startDate} - {item.endDate !== '' ? item.endDate : 'Atual'}</Text>
                                        <Text style={styles.contentSectionItems}>
                                            {item.description}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.rightContainer}>
                            <View style={styles.wrapperDetails}>
                                <Text style={styles.titleSectionItems}>Detalhes</Text>
                                <Text style={styles.contentSectionItems}>{personalInfo.city}</Text>
                                <Text style={styles.contentSectionItems}>{personalInfo.country}</Text>
                                {personalInfo.phoneNumber !== "" && <Text style={styles.contentSectionItems}>{personalInfo.phoneNumber}</Text>}
                                {personalInfo.email !== "" && (
                                    <Link
                                        src={`mailto:${personalInfo.email}`}
                                        style={[styles.contentSectionItems, styles.linkItem]}
                                    >
                                        {personalInfo.email}
                                    </Link>
                                )}
                            </View>

                            {websites.length > 0 && (
                                <View style={styles.wrapperLinks}>
                                    <Text style={styles.titleSectionItems}>Links</Text>
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

                            {skills.length > 0 && (
                                <View style={styles.wrapperLinks}>
                                    <Text style={styles.titleSectionItems}>Habilidades</Text>
                                    {skills.map((item, index) => (
                                        <Text key={index} style={styles.contentSectionItems}>{item}</Text>
                                    ))}
                                </View>
                            )}

                            {languages.length > 0 && (
                                <View style={styles.wrapperLinks}>
                                    <Text style={styles.titleSectionItems}>Linguagens</Text>
                                    {languages.map((item, index) => (
                                        <Text key={index} style={styles.contentSectionItems}>
                                            {item.language} ({Constants.LEVEL_LANGUAGE[item.level as keyof typeof Constants.LEVEL_LANGUAGE]})
                                        </Text>
                                    ))}
                                </View>
                            )}

                            {hobbies.description !== "" && (
                                <View style={styles.wrapperLinks}>
                                    <Text style={styles.titleSectionItems}>Hobbies</Text>
                                    <Text style={styles.contentSectionItems}>{hobbies.description}</Text>
                                </View>
                            )}
                        </View>
                    </View>

                </Page>
            </Document>
        </PDFViewer>
    )
}

export default SimpleCV
