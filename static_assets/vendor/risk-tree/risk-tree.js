
// Configuration of tree

    var chart_config = {
        chart: {
            container: "#custom-colored",
            rootOrientation:  'WEST',   /* JDS */
            nodeAlign: "BOTTOM",

            connectors: {
//                type: 'step'
            },
            node: {
                collapsable: true,   /* JDS */                
                HTMLclass: 'nodeExample1',
            }

        },


        nodeStructure: 


// Paste JSON below ( without first & last [ ]   )


// Automating this requires taking into account the following:
// Level 0 : "collapsed": false,  
// Level 1 to n-1  : "collapsed": true, 
// Level n: missing (otherwise hyperlink won't work)
// Hyperlink:   Not compatible with the collapsed flag. The hyperlink should be present only on the last level (ie leaf is where parent property = false) 
// Doing a Find & replace to put the tree name in the hyerlink

{
        "text": {
            "name": "Operational"
        },
        "link": {
            "href": "/risk/Operational/"
        },
        "HTMLclass": "blue",
        "collapsed": false, 
        "children": [
            {
                "text": {
                    "name": "Internal Fraud"
                },
                "link": {
                    "href": "/risk/Operational/InternalFraud/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "Unauthorised Activity"
                        },
                        "link": {
                            "href": "/risk/Operational/InternalFraud/UnauthorisedActivity/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Intentional mis-marking of positions"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/UnauthorisedActivity/Intentional-mis-marking-of-positions/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Invalid authorization of exposures or expenditures"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/UnauthorisedActivity/Invalid-authorization-of-exposures-or-expenditures/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Mandate breaches"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/UnauthorisedActivity/Mandate-breaches/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Internal Theft & Fraud"
                        },
                        "link": {
                            "href": "/risk/Operational/InternalFraud/InternalTheftFraud/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Embezzlement"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Embezzlement/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Claim fabrication"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Claim-fabrication/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Forgery"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Forgery/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Kickbacks/bribes"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Kickbacks-bribes/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Extortion"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Extortion/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Expense reimbursement schemes"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Expense-reimbursement-schemes/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Payroll schemes"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Payroll-schemes/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Insider trading for personal gain"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Insider-trading-for-personal-gain/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Deliberate misstatements or omissions of amounts or disclosures of financial statements"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/InternalTheftFraud/Deliberate-misstatements-or-omissions-of-amounts/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "System Security Internal – Wilful Damage"
                        },
                        "link": {
                            "href": "/risk/Operational/InternalFraud/SystemSecurityInternalWilfulDamage/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Unauthorized appropriation of confidential information"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/SystemSecurityInternalWilfulDamage/Unauthorized-appropriation-of-confidential-/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Computer malevolence"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/SystemSecurityInternalWilfulDamage/Computer-malevolence/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Social engineering"
                                },
                                "link": {
                                    "href": "/risk/Operational/InternalFraud/SystemSecurityInternalWilfulDamage/Social-engineering/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "External Fraud"
                },
                "link": {
                    "href": "/risk/Operational/ExternalFraud/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "External Theft & Fraud"
                        },
                        "link": {
                            "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Theft of Company's assets"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Theft-of-Company-assets/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Sale of confidential information to third parties"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Sale-of-confidential-information-to-third-parties/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Industrial espionage"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Industrial-espionage/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Intellectual property theft"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Intellectual-property-theft/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Cheques theft"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Cheques-theft/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fake claims"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Fake-claims/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fraudulent surrenders"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Fraudulent-surrenders/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "False certificates or medical records"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/False-certificates-or-medical-records/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fake car theft"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Fake-car-theft/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fraudulent estimation of damage"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Fraudulent-estimation-of-damage/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Non-existent damaged reported in claims request"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Non-existent-damaged-reported-in-claims-request/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "False witnesses"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/False-witnesses/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fraudulent change of beneficiary"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Fraudulent-change-of-beneficiary/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Policy written by false agents or false agencies"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Policy-written-by-false-agents-or-false-agencies/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Misrepresentation on risk assets by customer"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Misrepresentation-on-risk-assets-by-customer/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fraud by financial advisors or brokers"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/ExternalTheftFraud/Fraud-by-financial-advisors-or-brokers/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "System Security External – Wilful Damage"
                        },
                        "link": {
                            "href": "/risk/Operational/ExternalFraud/SystemSecurityExternalWilfulDamage/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Theft of data/files information"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/SystemSecurityExternalWilfulDamage/Theft-of-data-files-information/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Unauthorized appropriation of confidential information"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/SystemSecurityExternalWilfulDamage/Unauthorized-appropriation-of-confidential-info/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Computer malevolence"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/SystemSecurityExternalWilfulDamage/Computer-malevolence-external/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Social engineering"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExternalFraud/SystemSecurityExternalWilfulDamage/Social-engineering-external/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "Employment Practices & workplace Safety"
                },
                "link": {
                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "Employee Relations and Employment practices"
                        },
                        "link": {
                            "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Breach of a staff member private life"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Breach-of-a-staff-member-private-life/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Breach of human resource regulations"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Breach-of-human-resource-regulations/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Employee without any employment contract"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Employee-without-any-employment-contract/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Errors in employment contract"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Errors-in-employment-contract/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Change of contract without employee's agreement"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Change-of-contract-without-employee-agreement/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Recruitment cancelled after contract signed"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Recruitment-cancelled-after-contract-signed/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Contract termination without justifications"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Contract-termination-without-justifications/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Lawsuits in case of an employee's illness or injury"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Lawsuits-in-case-of-an-employee-illness/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Lawsuits related to calculation of tax and benefit positions"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Lawsuits-related-to-calculation-of-tax/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Lawsuits related to calculation of salary"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Lawsuits-related-to-calculation-of-salary/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Invasion of privacy"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/EmployeeRelationsEmploymentPractices/Invasion-of-privacy/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Safe Workplace Environment"
                        },
                        "link": {
                            "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/SafeWorkplaceEnvironment/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Employee health and safety rules events"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/SafeWorkplaceEnvironment/Employee-health-and-safety-rules-events/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Events relating to general liability"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/SafeWorkplaceEnvironment/Events-relating-to-general-liability/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Failure to comply with a relevant health and workplace safety regulation"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/SafeWorkplaceEnvironment/Failure-to-comply-with-a-relevant-health/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Workers compensation"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/SafeWorkplaceEnvironment/Workers-compensation/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Diversity & Discrimination"
                        },
                        "link": {
                            "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/DiversityDiscrimination/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Bullying, harassment, abuse or molestation of a member of staff"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/DiversityDiscrimination/Bullying-harassment-abuse-or-molestation/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Lawsuits related to discrimination"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/DiversityDiscrimination/Lawsuits-related-to-discrimination/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Favouritism towards some employees"
                                },
                                "link": {
                                    "href": "/risk/Operational/EmploymentPracticesWorkplaceSafety/DiversityDiscrimination/Favouritism-towards-some-employees/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "Clients, Products & Business Practices"
                },
                "link": {
                    "href": "/risk/Operational/ClientsProductsBusinessPractices/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "Suitability, Disclosure & Fiduciary"
                        },
                        "link": {
                            "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Shareholder liability"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Shareholder-liability/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Fiduciary breaches / guideline violations"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Fiduciary-breaches-guideline-violations/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Suitability / disclosure issues"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Suitability-disclosure-issues/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Retail consumer disclosure violations"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Retail-consumer-disclosure-violations/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Breach of privacy"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Breach-of-privacy/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Misuse / non intentional disclosure of confidential information"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Misuse-non-intentional-disclosure-of-conf/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Aggressive sales"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Aggressive-sales/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Deceptive sales practice"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Deceptive-sales-practice/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Concealment"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Concealment/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Misselling"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Misselling/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Account churning"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Account-churning/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Conduct risk beyond breaching laws"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Conduct-risk-beyond-breaching-laws/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Violation of data protection laws"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SuitabilityDisclosureFiduciary/Violation-of-data-protection-laws/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Improper Business or Market Practices"
                        },
                        "link": {
                            "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Anti-trust behaviour"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Anti-trust-behaviour/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Improper external reporting practices"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Improper-external-reporting-practices/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Improper trade / market practices"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Improper-trade-market-practices/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Market manipulation"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Market-manipulation/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Insider trading"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Insider-trading/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Unlicensed activities whether products or services"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Unlicensed-activities-whether-products-or-services/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Money laundering activities"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Money-laundering-activities/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Inappropriate discrimination / diversity events in the marketplace"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Inappropriate-discrimination-diversity-events/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Violation of substantive business contractual reserves"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Violation-of-substantive-business-contractual/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Lack of compliance with regulations or standards"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Lack-of-compliance-with-regulations-or-standards/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Failed reporting requirements (to clients)"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Failed-reporting-requirements/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Breach of sanctions and embargos"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ImproperBusinessMarketPractices/Breach-of-sanctions-and-embargos/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Product Flaws"
                        },
                        "link": {
                            "href": "/risk/Operational/ClientsProductsBusinessPractices/ProductFlaws/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Inadequate model implementation / model errors"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ProductFlaws/Inadequate-model-implementation-model-errors/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Breach of pricing policy"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ProductFlaws/Breach-of-pricing-policy/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Non-compliance of products with applicable internal or external requirements"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ProductFlaws/Non-compliance-of-products-with-requirements/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Inadequate approval/certification proceeding for new products and new activities"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ProductFlaws/Inadequate-approval-certification-proceeding-for/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Inadequate processes concerning complex and sensitive operations"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/ProductFlaws/Inadequate-processes-concerning-complex-operations/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Selection, Sponsorship & Exposure"
                        },
                        "link": {
                            "href": "/risk/Operational/ClientsProductsBusinessPractices/SelectionSponsorshipExposure/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Losses incurred due to a company exceeding the exposure limits"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SelectionSponsorshipExposure/Losses-incurred-due-to-exceeding-exposure-limits/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Politically Exposed Person screening"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SelectionSponsorshipExposure/Politically-Exposed-Person-screening/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Improper business partner due diligence or improper RFP process"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SelectionSponsorshipExposure/Improper-business-partner-due-diligence/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Failures in reinsurance purchase"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/SelectionSponsorshipExposure/Failures-in-reinsurance-purchase/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Advisory Activities"
                        },
                        "link": {
                            "href": "/risk/Operational/ClientsProductsBusinessPractices/AdvisoryActivities/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Incidents related to consultancy type of business"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/AdvisoryActivities/Incidents-related-to-consultancy-type-of-business/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Client is not given the service that they have been led to believe"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/AdvisoryActivities/Client-is-not-given-the-service/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Inappropriate performance of advisory activity"
                                },
                                "link": {
                                    "href": "/risk/Operational/ClientsProductsBusinessPractices/AdvisoryActivities/Inappropriate-performance-of-advisory-activity/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "Damage to Physical Assets"
                },
                "link": {
                    "href": "/risk/Operational/DamagePhysicalAssets/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "Natural disasters"
                        },
                        "link": {
                            "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Earthquake"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Earthquake/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Tsunami"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Tsunami/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Flood"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Flood/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Storm"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Storm/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Hail / Snow"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Hail-Snow/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Storm surge"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Storm-surge/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Mudslide"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Mudslide/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Landslide"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/NaturalDisasters/Landslide/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Accidents & Public Safety"
                        },
                        "link": {
                            "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Fire"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/Fire/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Explosion"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/Explosion/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Pipe break"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/Pipe-break/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Malfunction of infrastructure"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/Malfunction-of-infrastructure/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Collapse of buildings"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/Collapse-of-buildings/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "A visitor to the premise is injured"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/AccidentsPublicSafety/A-visitor-to-the-premise-is-injured/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Willful Damage & Terrorism"
                        },
                        "link": {
                            "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Terrorist attack"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/Terrorist-attack/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Arson"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/Arson/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Explosion"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/Explosion-wilful/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Threat to employee wellbeing by a 3rd party"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/Threat-to-employee-wellbeing-by-a-3rd-party/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Political demonstrations"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/Political-demonstrations/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Rioting"
                                },
                                "link": {
                                    "href": "/risk/Operational/DamagePhysicalAssets/WilfulDamageTerrorism/Rioting/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "Business Disruption and System Failure"
                },
                "link": {
                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "Internal System Failure"
                        },
                        "link": {
                            "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Internal software failures"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-software-failures/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Internal system unavailability/downtimes"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-system-unavailability-downtimes/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Internal system performance problems"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-system-performance-problems/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Internal server or host performance problems"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-server-or-host-performance-problems/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Internal hardware outages"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-hardware-outages/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Internal network outage"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-network-outage/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Internal loss of data"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/InternalSystemFailure/Internal-loss-of-data/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "External System Failure"
                        },
                        "link": {
                            "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "External software failures"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-software-failures/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External system unavailability/downtimes due to system bugs"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-System-unavailability-downtimes/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External system performance problems"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-system-performance-problems/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External server or host performance problems"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-server-or-host-performance-problems/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External hardware outages"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-hardware-outages/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External network outage"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-network-outage/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External loss of data"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-loss-of-data/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Utility disruptions"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/Utility-disruptions/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "External telecommunications network outage"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/External-telecommunications-network-outage/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Transportation disruptions"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/Transportation-disruptions/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Pandemic/epidemic related disruptions"
                                },
                                "link": {
                                    "href": "/risk/Operational/BusinessDisruptionSystemFailure/ExternalSystemFailure/Pandemic-epidemic-related-disruptions/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "Execution, Delivery & Process Management"
                },
                "link": {
                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "Transaction Capture, Execution & Maintenance"
                        },
                        "link": {
                            "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Miscommunication"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Miscommunication/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Data entry"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Data-entry/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Maintenance or loading error"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Maintenance-or-loading-error/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Missed deadline or responsibility"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Missed-deadline-or-responsibility/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Model / system mis-operation"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Model-system-mis-operation/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Wrong data or wrong assumptions"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Wrong-data-or-wrong-assumptions/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Accounting error / entity attribution error"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Accounting-error-entity-attribution-error/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Other transaction process task misperformance"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Other-transaction-process-task-misperformance/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Delivery failure"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Delivery-failure/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Collateral management failure"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Collateral-management-failure/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Reference Data Maintenance"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Reference-Data-Maintenance/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Incorrect registration of a client switching funds in a unit linked project"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Incorrect-registration-of-a-client-switching-funds/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Wrong calculation of reserves"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Wrong-calculation-of-reserves/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Duplicate payments"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Duplicate-payments/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Mistakes in commission calculations"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Mistakes-in-commission-calculations/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Derivatives failures"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/TransactionCaptureExecutionMaintenance/Derivatives-failures/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Monitoring & Reporting"
                        },
                        "link": {
                            "href": "/risk/Operational/ExecutionDeliveryProcessManagement/MonitoringReporting/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Failed mandatory reporting obligation"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/MonitoringReporting/Failed-mandatory-reporting-obligation/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Inaccurate external report (loss or fine incurred)"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/MonitoringReporting/Inaccurate-external-report-loss-or-fine-incurred/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Wrong tax filings"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/MonitoringReporting/Wrong-tax-filings/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Customer Intake & Documentation"
                        },
                        "link": {
                            "href": "/risk/Operational/ExecutionDeliveryProcessManagement/CustomerIntakeDocumentation/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Client permissions / disclaimers missing"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/CustomerIntakeDocumentation/Client-permissions-disclaimers-missing/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Legal documents missing / incomplete"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/CustomerIntakeDocumentation/Legal-documents-missing-incomplete/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Issues with regular client onboarding process"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/CustomerIntakeDocumentation/Issues-with-regular-client-onboarding-process/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Missing risk assessment in the underwriting process"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/CustomerIntakeDocumentation/Missing-risk-assessment-in-the-underwriting-proces/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Other failures (without breaching laws)"
                                },
                                "link": {
                                    "href": "/risk/Operational/ExecutionDeliveryProcessManagement/CustomerIntakeDocumentation/Other-failures-without-breaching-laws/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }


// JSON ends here


    };
