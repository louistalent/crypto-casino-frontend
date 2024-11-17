// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PrivacyPolicy = () => (
    <Stack spacing={2}>
        <Stack spacing={3}>
            <Typography variant="h3" textAlign="center">
                PRIVACY POLICY
            </Typography>
            <Stack mt={2}>
                <Card
                    sx={{
                        pt: 2,
                        pb: 4,
                        borderRadius: 0,
                        borderTopWidth: 5,
                        borderTopStyle: 'solid',
                        borderTopColor: 'primary.main',
                        boxShadow: 'none',
                        background: 'linear-gradient(0deg, #282F48, #282F48),linear-gradient(0deg, #058DEE, #058DEE)'
                    }}
                >
                    <CardContent component={Stack} alignItems="center" spacing={3}>
                        {/* <Typography variant="h6">
                            We want our players to have fun while playing atSahara365, so we encourage responsible
                            gaming.
                        </Typography> */}

                        <Stack alignItems="flex-start">
                            <Typography textAlign="start" fontWeight={100} color="textSecondary">
                                {/* <Box component="span" fontWeight="bold" color="#e9e9e9">
                                    Ultimo aggiornamento:&nbsp;&nbsp;
                                </Box> */}
                                Sahara365 privacy policy covers personal confidentiality regarding the information you
                                provide to us. Your name, address, phone numbers, email address, identification
                                information, and banking information are what we refer to as personal confidentiality.
                            </Typography>
                            <Stack mt={2}>
                                <Typography variant="h5">Acceptance of Privacy Policy</Typography>

                                <Typography fontWeight={100} color="textSecondary">
                                    When you access this website, you accept the Terms and Agreement of our Privacy
                                    Policy, contractually.
                                </Typography>
                            </Stack>
                            <Stack mt={2}>
                                <Typography variant="h5">Telephone Calls</Typography>

                                <Typography fontWeight={100} color="textSecondary">
                                    All phone calls to our Customer Contact Centers are used for customer training and
                                    security purposes and can be recorded. This is a part of our policy to serve you
                                    better.
                                </Typography>
                            </Stack>

                            <Stack mt={2}>
                                <Typography variant="h5">Collection and Use of Information</Typography>

                                <Typography fontWeight={100} color="textSecondary">
                                    Sahara365 may choose at any point to collect personal and confidential information,
                                    from the moment that you accept the Terms and Agreement of our Privacy Policy
                                    onward. Should you choose to use our products or other business services from
                                    Sahara365 partners, Sahara365 can use this information. The purpose of collecting
                                    this information is not used for harmful purposes but rather as statistical
                                    information to help us improve our service.
                                </Typography>
                            </Stack>

                            <Stack mt={2}>
                                <Typography variant="h5">Use of Cookies</Typography>

                                <Typography fontWeight={100} color="textSecondary">
                                    Sahara365 may use cookies as a form of collecting information. This can be done
                                    through our web server with the sole purpose to maintain your privacy and security.
                                    Information Disclosure
                                </Typography>
                                <Typography mt={1} fontWeight={100} color="textSecondary">
                                    Your personal and confidential information will never be sold or rented to anyone.
                                    The only circumstance that your information will be disclosed to other companies is
                                    only when:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・ Once you consent to our Terms and Agreement of our Privacy Policy.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・ It is imperative that we disclose your information due to a request you have
                                    made.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・ For statistical purposes, this will be under a privacy policy.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・ In response to any court orders, legal process, or subpoenas.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・ If you have abused your actions on Sahara365 website.
                                </Typography>
                            </Stack>

                            <Stack mt={2}>
                                <Typography variant="h5">Information Storage</Typography>

                                <Typography fontWeight={100} color="textSecondary">
                                    Sahara365 considers your confidential information of the uttermost importance;
                                    Sahara365 protects this information as securely as possible. Information can be
                                    disclosed only with companies affiliated with Sahara365. Sahara365 may rely on
                                    credit reference agencies to perform research in order to prevent fraud, vouch for
                                    your age, and prevent identity theft and money laundering. This is done for your
                                    benefit and safety. In the research and prevention of this, we may disclose this
                                    information to second- or third-party agencies.
                                </Typography>
                            </Stack>

                            <Stack mt={2}>
                                <Typography variant="h5">
                                    Your Privacy Rights - Right to access to your information
                                </Typography>

                                <Typography variant="h6" color="textSecondary" mt={1}>
                                    1. You have a right to access the personal data we hold in our records. Depending on
                                    the Subject Access Request (SAR) you send to us, we will:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・Confirm that data about you is being processed, and/or
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・Provide you with a copy of your personal data undergoing processing, and/or
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・Provide you with supplementary information, such as information on appropriate
                                    safeguards in place when transferring data.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    We may decide not to comply with your request for information if we feel that your
                                    request goes beyond your right to request access to information.
                                </Typography>

                                <Typography variant="h5" mt={2} color="textSecondary">
                                    2. Right to be forgotten or Right of Erasure:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    You may at any time request us to erase all of your data. Obviously enough, this
                                    will however bring about a situation wherein we will no longer be able to provide
                                    you with the service we promised you. Furthermore, we will only be able to comply
                                    with your request if we do not have a legal obligation to actually retain that
                                    specific data, such as in the case of certain data pertaining to self-excluded
                                    players. Any such requests should be submitted to support@gamblix.dev
                                </Typography>

                                <Typography variant="h5" mt={2} color="textSecondary">
                                    3. Rectification and erasure:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    Though we strive to ensure that your data is up-to-date all of the time, there may
                                    be situations wherein we fail to do so - for instance, if such information is not
                                    provided to us. In that respect, Sahara365 takes no responsibility or liability for
                                    the accuracy or correctness of the data provided. Nevertheless, you may, at any
                                    time, request us to correct any inaccuracies. We will respond to your request for
                                    rectification within a maximum of one month period.
                                </Typography>

                                <Typography variant="h5" mt={2} color="textSecondary">
                                    4. Restriction of processing:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    You may, at any time, submit a request to restrict the processing of your data.
                                </Typography>

                                <Typography variant="h5" mt={2} color="textSecondary">
                                    5. Right to Data Portability: Upon your request, we shall:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・Forward to you the personal data which we have received from you, in a structured,
                                    commonly used and machine-readable format; and
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    ・Transmit those to a data controller which you specify, where it is technically
                                    feasible for us to do so.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    Such requests will be adhered to without undue delay and in any event within one
                                    month of receipt of the request.
                                </Typography>

                                <Typography variant="h5" mt={2} color="textSecondary">
                                    6. Right to Object:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    You have the right to object, on grounds relating to your particular situation, at
                                    any time to processing of personal data that concerns you. You have the right to
                                    request that the processing of your personal data is limited. We will accede to your
                                    request, unless we feel that we have compelling grounds not to do so, which grounds
                                    override your interests and right, or if we feel that such an approach needs to be
                                    adopted for us to be able to defend our legal claims.
                                </Typography>

                                <Typography variant="h5" mt={2} color="textSecondary">
                                    7. Right to opt out of having your information used for marketing:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    {`You have the right to withdraw your consent of having your information used for
                                    direct marketing at any time. This may be done by sending an email to our Customer
                                    Support (support@gamblix.dev) or by clicking on the 'unsubscribe' option provided in
                                    each marketing email you receive.`}
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    If we decide that we have a valid reason not to comply with any of your requests
                                    which are based on any of the above rights, we will inform you that we will not
                                    accede to your request. In such circumstances, as per Article 77 of the General Data
                                    Protection (GDPR) (Regulation (EU) 2016/679) you will always be able to lodge a
                                    complaint with the relevant authorities.
                                </Typography>
                            </Stack>

                            <Stack mt={2}>
                                <Typography variant="h5">Contact Us</Typography>

                                <Typography fontWeight={100} color="textSecondary">
                                    Should you have further questions or concerns about these matters, please refer to
                                    our “24/7 support” page. Our staff will be more than glad to assist you further.
                                </Typography>
                            </Stack>

                            {/* <Stack mt={2}>
                                <Typography variant="h5">1. Informazioni Raccolte</Typography>
                                <Typography mt={3} fontWeight={100} color="textSecondary">
                                    Raccogliamo le seguenti categorie di informazioni personali:
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    <Box component="span" fontWeight="bold" color="#e9e9e9">
                                        1.1. Informazioni di Registrazione:&nbsp;&nbsp;
                                    </Box>
                                    Quando ti registri sul nostro Sito, potremmo raccogliere il tuo nome, indirizzo
                                    email, data di nascita e altre informazioni necessarie per la tua identificazione.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    <Box component="span" fontWeight="bold" color="#e9e9e9">
                                        1.2. Informazioni Finanziarie:&nbsp;&nbsp;
                                    </Box>
                                    Quando effettui transazioni sul nostro Sito, potremmo raccogliere informazioni
                                    relative alle tue transazioni finanziarie, come dettagli sulla carta di credito o
                                    altre informazioni di pagamento.
                                </Typography>
                                <Typography fontWeight={100} color="textSecondary">
                                    <Box component="span" fontWeight="bold" color="#e9e9e9">
                                        1.3. Informazioni di Utilizzo:&nbsp;&nbsp;
                                    </Box>
                                    Raccogliamo informazioni automaticamente riguardo al tuo utilizzo del Sito, inclusi
                                    i tuoi indirizzi IP, dati di accesso, preferenze e comportamenti di navigazione.
                                </Typography>
                            </Stack> */}
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    </Stack>
);

export default PrivacyPolicy;
