export default {
  "actions" : [
    {
      "parameters" : [
        {
          "name" : "AUTOMATION_BRANCH",
          "value" : "master"
        }
      ]
    },
    {
      "causes" : [
        {
          "shortDescription" : "Started by user jenkinsautomation",
          "userId" : "jenkinsautomation",
          "userName" : "jenkinsautomation"
        }
      ]
    },
    {
      "queuingDurationMillis" : 5911,
      "totalDurationMillis" : 357465
    },
    {

    },
    {
      "buildsByBranchName" : {
        "plusnet/develop" : {
          "buildNumber" : 385,
          "buildResult" : null,
          "marked" : {
            "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
            "branch" : [
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "plusnet/develop"
              },
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "origin/develop"
              }
            ]
          },
          "revision" : {
            "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
            "branch" : [
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "plusnet/develop"
              },
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "origin/develop"
              }
            ]
          }
        },
        "origin/develop" : {
          "buildNumber" : 385,
          "buildResult" : null,
          "marked" : {
            "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
            "branch" : [
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "plusnet/develop"
              },
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "origin/develop"
              }
            ]
          },
          "revision" : {
            "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
            "branch" : [
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "plusnet/develop"
              },
              {
                "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
                "name" : "origin/develop"
              }
            ]
          }
        }
      },
      "lastBuiltRevision" : {
        "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
        "branch" : [
          {
            "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
            "name" : "plusnet/develop"
          },
          {
            "SHA1" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
            "name" : "origin/develop"
          }
        ]
      },
      "remoteUrls" : [
        "git.internal.plus.net:/git/plusnet/PlusnetSalesJourneyApplication"
      ],
      "scmName" : ""
    },
    {
      "tags" : [

      ]
    },
    {

    },
    {
      "moduleRecords" : [
        {
          "attachedArtifacts" : [
            {
              "artifactId" : "PlusnetSalesJourneyApplication",
              "canonicalName" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
              "classifier" : "distribution",
              "fileName" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
              "groupId" : "net.plus",
              "md5sum" : "91d74674b7653be05bce99ebe9e35c31",
              "type" : "tar.gz",
              "version" : "1.347.0"
            }
          ],
          "mainArtifact" : {
            "artifactId" : "PlusnetSalesJourneyApplication",
            "canonicalName" : "PlusnetSalesJourneyApplication-1.347.0.pom",
            "classifier" : null,
            "fileName" : "pom.xml",
            "groupId" : "net.plus",
            "md5sum" : "50942c476ab93ba25e434ca0ae671cd0",
            "type" : "pom",
            "version" : "1.347.0"
          },
          "parent" : {
            "actions" : [
              {

              },
              {

              },
              {
                "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/mavenArtifacts/"
              }
            ],
            "artifacts" : [
              {
                "displayPath" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
                "fileName" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
                "relativePath" : "net.plus/PlusnetSalesJourneyApplication/1.347.0/PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz"
              },
              {
                "displayPath" : "PlusnetSalesJourneyApplication-1.347.0.pom",
                "fileName" : "PlusnetSalesJourneyApplication-1.347.0.pom",
                "relativePath" : "net.plus/PlusnetSalesJourneyApplication/1.347.0/PlusnetSalesJourneyApplication-1.347.0.pom"
              }
            ],
            "building" : false,
            "description" : null,
            "duration" : 277688,
            "estimatedDuration" : 339556,
            "executor" : null,
            "fullDisplayName" : "PlusnetSalesJourneyApplication-build-develop » PlusnetSalesJourneyApplication #385",
            "id" : "2017-01-19_15-43-11",
            "keepLog" : false,
            "number" : 385,
            "result" : "SUCCESS",
            "timestamp" : 1484840591000,
            "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/",
            "builtOn" : "jenkins-slave-jessie-25",
            "changeSet" : {
              "items" : [

              ],
              "kind" : null
            },
            "culprits" : [

            ],
            "mavenArtifacts" : {
              "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/mavenArtifacts/"
            }
          },
          "pomArtifact" : {
            "artifactId" : "PlusnetSalesJourneyApplication",
            "canonicalName" : "PlusnetSalesJourneyApplication-1.347.0.pom",
            "classifier" : null,
            "fileName" : "pom.xml",
            "groupId" : "net.plus",
            "md5sum" : "50942c476ab93ba25e434ca0ae671cd0",
            "type" : "pom",
            "version" : "1.347.0"
          },
          "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/mavenArtifacts/"
        }
      ]
    },
    {

    },
    {

    },
    {

    }
  ],
  "artifacts" : [

  ],
  "building" : false,
  "description" : null,
  "duration" : 351554,
  "estimatedDuration" : 416405,
  "executor" : null,
  "fullDisplayName" : "PlusnetSalesJourneyApplication-build-develop #385",
  "id" : "2017-01-19_15-43-04",
  "keepLog" : false,
  "number" : 385,
  "result" : "SUCCESS",
  "timestamp" : 1484840584559,
  "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/385/",
  "builtOn" : "jenkins-slave-jessie-25",
  "changeSet" : {
    "items" : [
      {
        "affectedPaths" : [
          "deps",
          "pom.xml"
        ],
        "commitId" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
        "timestamp" : 1484840452000,
        "author" : {
          "absoluteUrl" : "http://ci.internal.plus.net/user/rob.deniszczyc",
          "fullName" : "rob.deniszczyc"
        },
        "comment" : "[SALES-968] Merging in hotfix to develop\n",
        "date" : "2017-01-19T15:40:52+0000 +0000",
        "id" : "e35eb8d4342d2a44fe5f910ab61fa585b0fcc4fb",
        "msg" : "[SALES-968] Merging in hotfix to develop",
        "paths" : [
          {
            "editType" : "edit",
            "file" : "deps"
          },
          {
            "editType" : "edit",
            "file" : "pom.xml"
          }
        ]
      }
    ],
    "kind" : "git"
  },
  "culprits" : [
    {
      "absoluteUrl" : "http://ci.internal.plus.net/user/rob.deniszczyc",
      "description" : null,
      "fullName" : "rob.deniszczyc",
      "id" : "rob.deniszczyc",
      "property" : [
        {

        },
        {

        },
        {

        },
        {
          "insensitiveSearch" : false
        },
        {
          "address" : "rob.deniszczyc@plus.net"
        },
        {

        },
        {

        }
      ]
    }
  ],
  "fingerprint" : [
    {
      "fileName" : "pom.xml",
      "hash" : "838aec1169479f12e3761a720fc07fa5",
      "original" : null,
      "timestamp" : 1444989767176,
      "usage" : [
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-ASA-jd-hotfix36/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-775-ms-blue-box-when-lrs-promo",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-speedranges/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-master/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 20,
                "start" : 19
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-2016.36.1/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-474-hv-bundle-promos-on-affiliate-pages",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 2
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-rd-unlimitedFibre12mOfferOptionsPageDefaultSelectionOnOffer",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-TAMA-2207-rd-faviconUpdate/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-ASA-134-jd-pandpFee/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jf-2016.34.1/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 8,
                "start" : 5
              },
              {
                "end" : 10,
                "start" : 9
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-618-Update2/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-618-OT-UpdatedPromotionLoadingMechanism/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 23,
                "start" : 18
              }
            ]
          }
        },
        {
          "name" : "PlusnetBTSportOverSkyBundle-build-develop/net.plus:PlusnetBTSportOverSkyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 41,
                "start" : 36
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.14/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-release31PartTwo",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-lt-2016.34.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-647-OT-RemoveHeadlinePricesHacks",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "AddWlr-build-feature-BCD-910-InvoiceDate-fromRBM/net.plus:AddWlr",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-rd-2016.36.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-Release-2016.35/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 3
              },
              {
                "end" : 8,
                "start" : 7
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-release31PartTwo/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-feature-TAMA-2207-rd-faviconUpdate/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-647-OT-RemoveHeadlinePricesHacks/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-2245-2247-18MonthIPPSolutions/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-2245-2247-lt-force18MonthDealsPages/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 20,
                "start" : 19
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.10/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-ASA-34-JF-TechnicalWorkForASA",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-620-OT-BasketCases/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-lt-2016.34.1/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-speedranges",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBTSportOverSkyBundle-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 9,
                "start" : 6
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-564-AffiliateLandingPageActivationFeeDiscount",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-rd-2016.36.1/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-775-ms-blue-box-when-lrs-promo/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-620-OT-BasketCases",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 33
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-2245-2247-lt-force18MonthDealsPages",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-474-hv-bundle-promos-on-affiliate-pages/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 2
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-ASA-jd-hotfix36",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-master/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 33
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-2196-lt-ADSL18IPP/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jd-release31PartOne/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-master/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 20,
                "start" : 16
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-TAMA-2207-rd-updateFavicon/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-698-JJ-ReplaceHardCodedSolusPricesWithCallsToC2M",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.12/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-BCD-1360-CustomerCommunicationProductChangeWithBroadband",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-TAMA-2207-rd-faviconUpdate",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-916-OT-PackageOrdering",
          "ranges" : {
            "ranges" : [
              {
                "end" : 17,
                "start" : 12
              }
            ]
          }
        },
        {
          "name" : "AddWlr-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 13,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-618-OT-UpdatedPromotionLoadingMechanism",
          "ranges" : {
            "ranges" : [
              {
                "end" : 23,
                "start" : 18
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-BCD-1360-CustomerCommunicationProductChangeWithBroadband/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-Release-2016.35/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              },
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-854-UnableToSignupPotentialHullCustomers",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBTSportOverSkyBundle-build-master/net.plus:PlusnetBTSportOverSkyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 9,
                "start" : 6
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-feature-TAMA-2207-rd-faviconUpdate",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-hv-localising-C2mApiClient-dependency/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-randdtest/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-824-AbandonCartAbandonnedBeforeItWorked/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-SALES-618-OT-TestBuild/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              },
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 6
              },
              {
                "end" : 10,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.12",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-TAMA-2281-jd-incident96012",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-700-JJ-MissingPricesOnCampaignPages/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.10",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jf-2016.34.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 8,
                "start" : 5
              },
              {
                "end" : 10,
                "start" : 9
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-randdtest",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-854-UnableToSignupPotentialHullCustomers/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-618-Update2",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-develop/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 154,
                "start" : 149
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-698-JJ-ReplaceHardCodedSolusPricesWithCallsToC2M/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-916-OT-PackageOrdering/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 17,
                "start" : 12
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-master/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 33,
                "start" : 28
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-2196-lt-ADSL18IPP",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-2016.36.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 20,
                "start" : 16
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-hv-localising-C2mApiClient-dependency",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-700-JJ-MissingPricesOnCampaignPages",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 154,
                "start" : 149
              }
            ]
          }
        },
        {
          "name" : "AddWlr-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 32
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-2245-2247-18MonthIPPSolutions",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 33,
                "start" : 28
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 122,
                "start" : 117
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-develop/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 45,
                "start" : 44
              },
              {
                "end" : 54,
                "start" : 46
              },
              {
                "end" : 65,
                "start" : 57
              },
              {
                "end" : 69,
                "start" : 66
              },
              {
                "end" : 78,
                "start" : 70
              },
              {
                "end" : 90,
                "start" : 79
              },
              {
                "end" : 122,
                "start" : 91
              }
            ]
          }
        },
        {
          "name" : "PlusnetBTSportOverSkyBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 41,
                "start" : 36
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-ASA-134-jd-pandpFee",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-hotfix-Release-2016.35/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 3
              },
              {
                "end" : 8,
                "start" : 7
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.14/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 6
              },
              {
                "end" : 10,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-TAMA-2281-jd-incident96012/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-ASA-34-JF-TechnicalWorkForASA/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBTSportOverSkyBundle-build-feature-TAMA-2333-lt-brokenBTSpotImage/net.plus:PlusnetBTSportOverSkyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-564-AffiliateLandingPageActivationFeeDiscount/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-SALES-618-OT-TestBuild",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "AddWlr-build-develop/net.plus:AddWlr",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 32
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-TAMA-rd-unlimitedFibre12mOfferOptionsPageDefaultSelectionOnOffer/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "AddWlr-build-master/net.plus:AddWlr",
          "ranges" : {
            "ranges" : [
              {
                "end" : 13,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-feature-SALES-824-AbandonCartAbandonnedBeforeItWorked",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jd-release31PartOne",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "AddWlr-build-feature-BCD-910-InvoiceDate-fromRBM",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBTSportOverSkyBundle-build-feature-TAMA-2333-lt-brokenBTSpotImage",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-TAMA-2207-rd-updateFavicon",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "net.plus:GenericSalesJourneyBundle:pom.xml",
      "hash" : "45181e118d56a0a8d04e4fb20a1452a2",
      "original" : {
        "name" : "GenericSalesJourneyBundle-build-develop/net.plus:GenericSalesJourneyBundle",
        "number" : 121
      },
      "timestamp" : 1484838230802,
      "usage" : [
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 199
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-develop/net.plus:GenericSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 122,
                "start" : 121
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        },
        {
          "name" : "GenericSalesJourneyBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 122,
                "start" : 121
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 199
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "pom.xml",
      "hash" : "2e1a7b48529af13356a29b474b148820",
      "original" : {
        "name" : "MacKeySubmissionBundle-build-develop/net.plus:MacKeySubmissionBundle",
        "number" : 1
      },
      "timestamp" : 1436458292378,
      "usage" : [
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jf-2016.34.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 8,
                "start" : 5
              },
              {
                "end" : 10,
                "start" : 9
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 6
              },
              {
                "end" : 10,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-hv-localising-C2mApiClient-dependency/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "MacKeySubmissionBundle-build-master/net.plus:MacKeySubmissionBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.12",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-ASA-jd-hotfix36/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 33
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.10",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-speedranges",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "MacKeySubmissionBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.10/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jd-release31PartOne/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-TAMA-2281-jd-incident96012",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-ASA-jd-hotfix36",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-SALES-618-OT-TestBuild",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-master/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 33,
                "start" : 28
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-2016.36.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-rd-2016.36.1/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "MacKeySubmissionBundle-build-develop/net.plus:MacKeySubmissionBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.14/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 6
              },
              {
                "end" : 10,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-ASA-134-jd-pandpFee/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-TAMA-2207-rd-updateFavicon",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-lt-2016.34.1/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-TAMA-2281-jd-incident96012/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-TAMA-2207-rd-faviconUpdate",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jf-2016.34.1/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 8,
                "start" : 5
              },
              {
                "end" : 10,
                "start" : 9
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.12/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-release31PartTwo/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-lt-2016.34.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-master/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 33
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-rd-2016.36.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              },
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-TAMA-2207-rd-faviconUpdate/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.10",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-ASA-134-jd-pandpFee",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-SALES-618-OT-TestBuild/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-Release-2016.35/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              },
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.10/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-TAMA-2207-rd-updateFavicon/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "MacKeySubmissionBundle-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-hv-localising-C2mApiClient-dependency",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-speedranges/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 33,
                "start" : 28
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-2016.36.1/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-Release-2016.35/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jd-release31PartOne",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-release31PartTwo",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.14/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "net.plus:PlusnetAssetsBundle:pom.xml",
      "hash" : "0b65f1462696b0f957f955cbef6dd1d9",
      "original" : {
        "name" : "PlusnetAssetsBundle-build-develop/net.plus:PlusnetAssetsBundle",
        "number" : 170
      },
      "timestamp" : 1484820733399,
      "usage" : [
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 199
              }
            ]
          }
        },
        {
          "name" : "PlusnetAssetsBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 171,
                "start" : 170
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 383
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 383
              }
            ]
          }
        },
        {
          "name" : "PlusnetAssetsBundle-build-develop/net.plus:PlusnetAssetsBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 171,
                "start" : 170
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 199
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "net.plus:PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
      "hash" : "91d74674b7653be05bce99ebe9e35c31",
      "original" : {
        "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
        "number" : 385
      },
      "timestamp" : 1484840874442,
      "usage" : [
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "net.plus:PlusnetSalesJourneyApplication:pom.xml",
      "hash" : "50942c476ab93ba25e434ca0ae671cd0",
      "original" : {
        "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
        "number" : 385
      },
      "timestamp" : 1484840874492,
      "usage" : [
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "net.plus:PlusnetSalesJourneyBundle:pom.xml",
      "hash" : "1894de4e9b3de803e750388ecf3c5443",
      "original" : {
        "name" : "PlusnetSalesJourneyBundle-build-develop/net.plus:PlusnetSalesJourneyBundle",
        "number" : 368
      },
      "timestamp" : 1484840538187,
      "usage" : [
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 199
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyBundle-build-develop/net.plus:PlusnetSalesJourneyBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 369,
                "start" : 368
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 369,
                "start" : 368
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 385
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 199
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "pom.xml",
      "hash" : "35f2324c1b1be19badd016a913aa2797",
      "original" : {
        "name" : "PlusnetWebProfilerBundle-build-develop/net.plus:PlusnetWebProfilerBundle",
        "number" : 49
      },
      "timestamp" : 1436365025168,
      "usage" : [
        {
          "name" : "PlusnetWebProfilerBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 50,
                "start" : 49
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetWebProfilerBundle-build-develop/net.plus:PlusnetWebProfilerBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 50,
                "start" : 49
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        }
      ]
    },
    {
      "fileName" : "pom.xml",
      "hash" : "112595bcd0bb59f4697b44e5e655837d",
      "original" : null,
      "timestamp" : 1436467202702,
      "usage" : [
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jf-2016.34.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 8,
                "start" : 5
              },
              {
                "end" : 10,
                "start" : 9
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 6
              },
              {
                "end" : 10,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-hv-localising-C2mApiClient-dependency/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.12",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-ASA-jd-hotfix36/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 33
              }
            ]
          }
        },
        {
          "name" : "WizardBundle-build-develop/net.plus:WizardBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.10",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "WizardBundle-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-speedranges",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.10/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jd-release31PartOne/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-TAMA-2281-jd-incident96012",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-ASA-jd-hotfix36",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 20,
                "start" : 15
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-SALES-618-OT-TestBuild",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-master/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 33,
                "start" : 28
              }
            ]
          }
        },
        {
          "name" : "WizardBundle-build-master/net.plus:WizardBundle",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-2016.36.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-develop/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 200,
                "start" : 195
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-hotfix-Release-2016.35/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 3
              },
              {
                "end" : 8,
                "start" : 7
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-rd-2016.36.1/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.14/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 7,
                "start" : 6
              },
              {
                "end" : 10,
                "start" : 8
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-ASA-134-jd-pandpFee/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-TAMA-2207-rd-updateFavicon",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-lt-2016.34.1/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-TAMA-2281-jd-incident96012/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-TAMA-2207-rd-faviconUpdate",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jf-2016.34.1/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 8,
                "start" : 5
              },
              {
                "end" : 10,
                "start" : 9
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.12/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-release31PartTwo/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-release-2016.12/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-master/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 38,
                "start" : 33
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-lt-2016.34.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-rd-2016.36.1",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              },
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.10",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 3
              },
              {
                "end" : 8,
                "start" : 7
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-TAMA-2207-rd-faviconUpdate/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-SALES-962-rd-bizOptionsPagePricing/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-feature-SALES-618-OT-TestBuild/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-ASA-134-jd-pandpFee",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-release-2016.10/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-Release-2016.35/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              },
              {
                "end" : 6,
                "start" : 4
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-release-2016.14/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-develop/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 386,
                "start" : 381
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-TAMA-2207-rd-updateFavicon/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-feature-hv-localising-C2mApiClient-dependency",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-speedranges/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-release-2016.14",
          "ranges" : {
            "ranges" : [
              {
                "end" : 6,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-2016.36.1/net.plus:PlusnetSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-develop/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 143,
                "start" : 141
              },
              {
                "end" : 154,
                "start" : 149
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-release-2016.12",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 33,
                "start" : 28
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-Release-2016.35/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-rd-release31PartTwo",
          "ranges" : {
            "ranges" : [
              {
                "end" : 5,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-jd-release31PartOne",
          "ranges" : {
            "ranges" : [
              {
                "end" : 4,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "WizardBundle-build-master",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-feature-TAMA-2207-rd-faviconUpdate",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-feature-TAMA-2207-rd-faviconUpdate/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-master/net.plus:PlusnetTVApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 20,
                "start" : 15
              }
            ]
          }
        },
        {
          "name" : "PlusnetSalesJourneyApplication-build-hotfix-SALES-968-jd-ippFix",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-release-2016.14/net.plus:PlusnetBusinessSalesJourneyApplication",
          "ranges" : {
            "ranges" : [
              {
                "end" : 2,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetBusinessSalesJourneyApplication-build-hotfix-Release-2016.35",
          "ranges" : {
            "ranges" : [
              {
                "end" : 3,
                "start" : 1
              }
            ]
          }
        },
        {
          "name" : "PlusnetTVApplication-build-develop",
          "ranges" : {
            "ranges" : [
              {
                "end" : 143,
                "start" : 141
              },
              {
                "end" : 154,
                "start" : 149
              }
            ]
          }
        }
      ]
    }
  ],
  "mavenArtifacts" : {
    "moduleRecords" : [
      {
        "attachedArtifacts" : [
          {
            "artifactId" : "PlusnetSalesJourneyApplication",
            "canonicalName" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
            "classifier" : "distribution",
            "fileName" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
            "groupId" : "net.plus",
            "md5sum" : "91d74674b7653be05bce99ebe9e35c31",
            "type" : "tar.gz",
            "version" : "1.347.0"
          }
        ],
        "mainArtifact" : {
          "artifactId" : "PlusnetSalesJourneyApplication",
          "canonicalName" : "PlusnetSalesJourneyApplication-1.347.0.pom",
          "classifier" : null,
          "fileName" : "pom.xml",
          "groupId" : "net.plus",
          "md5sum" : "50942c476ab93ba25e434ca0ae671cd0",
          "type" : "pom",
          "version" : "1.347.0"
        },
        "parent" : {
          "actions" : [
            {

            },
            {

            },
            {
              "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/mavenArtifacts/"
            }
          ],
          "artifacts" : [
            {
              "displayPath" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
              "fileName" : "PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz",
              "relativePath" : "net.plus/PlusnetSalesJourneyApplication/1.347.0/PlusnetSalesJourneyApplication-1.347.0-distribution.tar.gz"
            },
            {
              "displayPath" : "PlusnetSalesJourneyApplication-1.347.0.pom",
              "fileName" : "PlusnetSalesJourneyApplication-1.347.0.pom",
              "relativePath" : "net.plus/PlusnetSalesJourneyApplication/1.347.0/PlusnetSalesJourneyApplication-1.347.0.pom"
            }
          ],
          "building" : false,
          "description" : null,
          "duration" : 277688,
          "estimatedDuration" : 339556,
          "executor" : null,
          "fullDisplayName" : "PlusnetSalesJourneyApplication-build-develop » PlusnetSalesJourneyApplication #385",
          "id" : "2017-01-19_15-43-11",
          "keepLog" : false,
          "number" : 385,
          "result" : "SUCCESS",
          "timestamp" : 1484840591000,
          "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/",
          "builtOn" : "jenkins-slave-jessie-25",
          "changeSet" : {
            "items" : [

            ],
            "kind" : null
          },
          "culprits" : [

          ],
          "mavenArtifacts" : {
            "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/mavenArtifacts/"
          }
        },
        "pomArtifact" : {
          "artifactId" : "PlusnetSalesJourneyApplication",
          "canonicalName" : "PlusnetSalesJourneyApplication-1.347.0.pom",
          "classifier" : null,
          "fileName" : "pom.xml",
          "groupId" : "net.plus",
          "md5sum" : "50942c476ab93ba25e434ca0ae671cd0",
          "type" : "pom",
          "version" : "1.347.0"
        },
        "url" : "http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/net.plus$PlusnetSalesJourneyApplication/385/mavenArtifacts/"
      }
    ]
  },
  "mavenVersionUsed" : "3.0.5"
}
