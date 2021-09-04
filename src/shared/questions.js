export const QUESTION=
{
  0:{
    id:0,
    name:"End  questionnaire, please book appointment to see GP",
    type:3,
    answer:{}
   }
  ,
  1:{
    id:1,
    name:"Are you male or female?",
    type:0,
    answer:{
        "Male":2,
        "Female":3,
     }
  }
  ,
  2:{
    id:2,
    name:"Do you have increased urinary frequency?",
    type:0,
    answer:{
      "Yes":3,
       "No":3,
     }
  }
  ,
  3 :{
    id:3,
    name:"Are you pain on passing urine(dysuria)?",
    type:0,
    answer:{
        "Yes":4,
        "No":4,
     }
  }

  ,
  4 :{
    id:4,
    name:"Do you have urgency of going to toliet?",
    type:0,
    answer:{
        "Yes":5,
        "No":5,
     }
  }
  ,

  5 :{
    id:5,
    name:"How often did you have urine infecion?",
    type:0,
    answer:{
        "First Time":6,
        "Second time in the last 12 months":0,
     }
  }
  ,

  6 :{
    id:6,
    name:"Do you have pain in your lower abdomen(in your bladder area)?",
    type:0,
    answer:{
        "Yes":7,
        "No":18,
     }
   }
,
7 :{
  id:7,
  name:"When was the last bladder infection?",
  type:0,
  answer:{
      "Within last 12 months":8,
      "More than one year":9,
   }
 }
 ,
 8 :{
   id:8,
   name:"What antibiotic was given to you?",
   type:1,
   answer:{
      "Trimethoprim":9,
      "Nitrofurantoin":9,
      "Co-Trimoxazole":9,
      "Fosfomycin":9,
      "Augmentin":9,
      "Ciprofloxacin":9,
      "Ofloxacin":9,
      "Ceflacor":9,
      "Cefuroxime":9,
      "Ceftibuten":9,
      "Others":9,
    }
  }
  ,
  9 :{
    id:9,
    name:"Have you had Urine culture done?",
    type:0,
    answer:{
        "Yes":10,
        "No":11,
     }
   }
   ,
   10 :{
     id:10,
     name:"If yes, what was the result?",
     type:1,
     answer:{
        "Escherichia Coli":11,
        "Proteus Vulgaris":11,
        "Pseudomonas aeruginosa":11,
        "Klebsiella pneumoniae":11,
        "Staphylococcus Saprophyticus":11,
        "Enterococcus Faecalis":11,
        "Streptococcus agalactiae":11,
        "Negative Culture":11,
        "Others":11,
      }
    }
    ,

    11 :{
      id:11,
      name:"Do you have any temperature symptoms?",
      type:0,
      answer:{
          "Yes":12,
          "No":13,
       }
     }
     ,
     12 :{
       id:12,
       name:"If yes, what is your symptoms?",
       type:1,
       answer:{
          "Chills and rigor(feeling/sensation of coldness)":13,
          "Feeling hot":13,
          "Night sweats":13,
          "Measured temperature above 38C":13,
        }
      }
      ,
      13 :{
        id:13,
        name:"Are you still able to eat and drink?",
        type:0,
        answer:{
          "Yes":17,
          "No":14,
         }
       }
       ,
       14 :{
         id:14,
         name:"Are you still able to pass urine as normal?",
         type:0,
         answer:{
           "Yes":15,
           "No":0,
          }
        }
        ,
        15 :{
          id:15,
          name:"Any vomiting?",
          type:0,
          answer:{
            "Yes":0,
            "No":16,
           }
         }
         ,
         16 :{
           id:16,
           name:"Are you able to keep your fluids down?",
           type:0,
           answer:{
             "Yes":17,
             "No":0,
            }
          }
          ,
          17 :{
            id:17,
            name:"Are you still able to function like normal?",
            type:0,
            answer:{
              "Yes":18,
              "No":0,
             }
           }
           ,
           18 :{
             id:18,
             name:"Do you have pain in your upper back (in your kidney area)? ",
             type:0,
             answer:{
               "Yes":19,
               "No":43,
              }
            }
            ,
            19 :{
              id:19,
              name:"Have you ever had kidney infection in the past? ",
              type:0,
              answer:{
                "	Yes ":20,
                " No ":20,
               }
             }
             ,
            20 :{
              id:20,
              name:"If yes, When was the last kidney infection? ",
              type:0,
              answer:{
                "	More than one year ":34,
                " Within last 12 months":20,
               }
             }
             ,
             21 :{
               id:21,
               name:"What antibiotic was given to you? ",
               type:1,
               answer:{
                 "Augmentin":22,
                 "Ciprofloxacin":22,
                 "Ofloxacin":22,
                 "Cefalexin":22,
                 "Others":22,
                }
              }
              ,
              22 :{
                id:22,
                name:"Were you admitted to hospital? ",
                type:0,
                answer:{
                  "Yes":23,
                  "No":34,

                 }
               }
               ,
               23 :{
                 id:23,
                 name:"Did they find any cause or source of kidney infection? ",
                 type:0,
                 answer:{
                   "Yes":24,
                   "No":25,

                  }
                }
                ,
                24 :{
                  id:24,
                  name:"If Yes,Please select the reason ",
                  type:1,
                  answer:{
                    "Renal Stone":25,
                    "Kidney disease":25,
                    "Dehydration":25,
                    "Cancer":25,
                    "Other":25,

                   }
                 }
                 ,
                 25 :{
                   id:25,
                   name:"How long were you admitted to hospital",
                   type:0,
                   answer:{
                     "Less than 48 hours":26,
                     "More than 48 hours":29,
                    }
                  }
                  ,
                  26 :{
                    id:26,
                    name:"What antibiotic were you discharged on?",
                    type:1,
                    answer:{
                      "Augmentin":27,
                      "Ciprofloxacin":27,
                      "Ofloxacin":27,
                      "Cefalexin":27,
                      "Others":27
                     }
                   }
                   ,
                   27 :{
                     id:27,
                     name:"Do you have any follow up arranged by the hospital",
                     type:0,
                     answer:{
                       "Yes":28,
                       "No":29,
                      }
                    }
                    ,
                    28 :{
                      id:28,
                      name:"if yes, When?",
                      type:2,
                      answer:{

                       }
                     }
                     ,
                     29:{
                       id:29,
                       name:"if more than 48 hours, Please provide the duartion?",
                       type:2,
                       answer:{

                        }
                      }
                      ,
                      30 :{
                        id:30,
                        name:"Did you have sepsis?",
                        type:0,
                        answer:{
                          "Yes":0,
                          "No":31,
                         }
                       }
                       ,
                       31 :{
                         id:31,
                         name:"What antibiotic were you discharged on?",
                         type:1,
                         answer:{
                           "Augmentin":27,
                           "Ciprofloxacin":27,
                           "Ofloxacin":27,
                           "Cefalexin":27,
                           "Others":27
                         }
                       }
                        ,
                        32 :{
                          id:32,
                          name:"Do you have any follow up arranged by the hospital?",
                          type:0,
                          answer:{
                            "Yes":33,
                            "No":34,
                           }
                         }
                         ,
                         33 :{
                           id:33,
                           name:"if yes, When?(Please include this date in the summary page end of consultation to remind patient to attend this follow up appointment)",
                           type:2,
                           answer:{
                             null:34
                            }
                          }
                          ,
                          34 :{
                            id:34,
                            name:"Was there any urine culture done?",
                            type:0,
                            answer:{
                              "Yes":35,
                              "No":36,
                             }
                           }
                           ,
                           35 :{
                             id:35,
                             name:"If yes, what was the result?",
                             type:1,
                             answer:{
                                "Escherichia Coli":36,
                                "Proteus Vulgaris":36,
                                "Pseudomonas aeruginosa":36,
                                "Klebsiella pneumoniae":36,
                                "Staphylococcus Saprophyticus":36,
                                "Enterococcus Faecalis":36,
                                "Streptococcus agalactiae":36,
                                "Negative Culture":36,
                                "Others":36,
                              }
                            }
                            ,

                            36 :{
                              id:36,
                              name:"Do you have any temperature symptoms?",
                              type:0,
                              answer:{
                                  "Yes":37,
                                  "No":38,
                               }
                             }
                             ,
                             37 :{
                               id:37,
                               name:"If yes, what is your symptoms?",
                               type:1,
                               answer:{
                                  "Chills and rigor(feeling/sensation of coldness)":38,
                                  "Feeling hot":38,
                                  "Night sweats":38,
                                  "Measured temperature above 38C":38,
                                }
                              }
                              ,
                              38 :{
                                id:38,
                                name:"Are you still able to eat and drink?",
                                type:0,
                                answer:{
                                  "Yes":42,
                                  "No":39,
                                 }
                               }
                               ,
                               39 :{
                                 id:39,
                                 name:"Are you still able to pass urine as normal?",
                                 type:0,
                                 answer:{
                                   "Yes":40,
                                   "No":0,
                                  }
                                }
                                ,
                                40 :{
                                  id:40,
                                  name:"Any vomiting?",
                                  type:0,
                                  answer:{
                                    "Yes":0,
                                    "No":41,
                                   }
                                 }
                                 ,
                                 41:{
                                   id:41,
                                   name:"Are you able to keep your fluids down?",
                                   type:0,
                                   answer:{
                                     "Yes":42,
                                     "No":0,
                                    }
                                  }
                                  ,
                                  42 :{
                                    id:42,
                                    name:"Are you still able to function like normal?",
                                    type:0,
                                    answer:{
                                      "Yes":43,
                                      "No":0,
                                     }
                                   }
                                   ,
                          43 :{
                            id:43,
                            name:"Any blood passing in the urine ",
                            type:0,
                            answer:{
                              "Yes":44,
                              "No":50,
                             }
                           }
                           ,
                           45 :{
                             id:45,
                             name:"Have you had this before ",
                             type:0,
                             answer:{
                               "Yes":46,
                               "No":50,
                              }
                            }
                            ,
                            46 :{
                              id:46,
                              name:"Did you have ultrasound scan done to find the cause and what was the outcome?",
                              type:0,
                              answer:{
                                "Yes":47,
                                "No":48,
                               }
                             }
                             ,
                             47 :{
                               id:47,
                               name:"if Yes, what is the reason",
                               type:1,
                               answer:{
                                 "Stone":48,
                                 "Infection":48,
                                 "No cause found":48,
                                 "cancer":48,
                                 "Other":48,
                                }
                              }
                              ,
                              48:{
                                id:48,
                                name:"Do you have follow-up arranged?",
                                type:0,
                                answer:{
                                  "Yes":49,
                                  "No":50,
                                 }
                               }
                               ,
                              49 :{
                                 id:49,
                                 name:"if yes, When?(Please include this date in the summary page end of consultation to remind patient to attend this follow up appointment)",
                                 type:2,
                                 answer:{
                                   null:50
                                  }
                                }
                                ,
                               50:{
                                  id:50,
                                  name:"Do you have any antibiotic allergy?",
                                  type:1,
                                  answer:{
                                      "Trimethoprim":51,
                                      "Nitrofurantoin/Macrodantin":51,
                                      "Sulfamethoxazole":51,
                                      "Co-Trimoxazole":51,
                                      "Amoxicillin/Penicillin":51,
                                      "Augmentin":51,
                                      "Erythromycin/clarithromycin/macrolides":51,
                                      "Fosfomycin":51,
                                      "Ciprofloxacin":51,
                                      "Ofloxacin":51,
                                      "Ceflalexin":51,
                                      "Cefuroxime":51,
                                      "Cefriaxone":51,
                                      "Ceftibuten":51,
                                      "Others":51,

                                    }
                                  }
                                  ,
                                  51:{
                                    id:51,
                                    name:"Do you have any renal/kidney problem?",
                                    type:0,
                                    answer:{
                                      "Yes":0,
                                      "No":52,
                                     }
                                   }
                                   ,
                                  52 :{
                                    id:52,
                                    name:"Any risks your symptoms may be related to sexual transmitted disease",
                                    type:0,
                                    answer:{
                                      "Yes":0,
                                      "No":53
                                     }
                                   }
                                   ,
                                   53 :{
                                     id:53,
                                     name:"Do you have history of G6PD?",
                                     type:0,
                                     answer:{
                                       "Yes":44,
                                       "No":44
                                      }
                                    }
                                    ,
                                    54 :{
                                      id:54,
                                      name:"Are you on any other medications?",
                                      type:0,
                                      answer:{
                                        null:44,

                                       }
                                     }
                                     ,


}
