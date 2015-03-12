angular.module('eventApp')
  .factory('executeResults', function ($http, $q, $upload) {
    var executeResults = {};




//로그인
        executeResults.login = function (id,pass) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/login',
                    data: {id: id , pass: pass}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



//진행 행사 이벤트 list
        executeResults.new_event_list = function () {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/new_event_list'
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


//지난 행사 이벤트 list
        executeResults.old_event_list = function () {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/old_event_list'
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 저장 버튼 누를시 이벤트 행사 신규 등록
        executeResults.event_insert = function (name,location,company,start,end,comment) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/event_insert',
                    data: {name: name, location: location, company: company,
                    start: start, end: end, comment: comment}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };





// 수정 버튼 누를시 이벤트 행사 수정 등록
        executeResults.event_amend = function (id,name,location,company,start,end,comment) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/event_amend',
                    data: {id: id, name: name, location: location, company: company,
                        start: start, end: end, comment: comment}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 종료 버튼 누를시 동작 함수
        executeResults.event_end = function (id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/event_end',
                    data: {id: id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 삭제 버튼 누를시 동작 함수
        executeResults.event_delete = function (id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/event_delete',
                    data: {id: id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


// 강의 목록 list
        executeResults.event_schedule_list = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/event_schedule_list',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 강연자 이름만 출력
        executeResults.teacher_name_list = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/teacher_name_list',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 저장 누를시 일정 추가 등록
        executeResults.eventScheduleInsert = function (event_id,schedule_seq,lecture,teacher_name) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/eventScheduleInsert',
                    data: {event_id : event_id ,schedule_seq: schedule_seq ,lecture: lecture ,teacher_name: teacher_name}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 수정 버튼 누를시 일정 등록 수정 eventScheduleMod
        executeResults.eventScheduleMod = function (event_id,schedule_seq,lecture,userId,scheduleId ) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/eventScheduleMod',
                    data: {event_id : event_id ,schedule_seq: schedule_seq ,lecture: lecture , userId: userId, scheduleId: scheduleId}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


// 삭제 버튼 누를시 일정 등록 수정 eventScheduleDelete
        executeResults.eventScheduleDelete = function (event_id,schedule_seq,lecture,userId,scheduleId ) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/eventScheduleDelete',
                    data: {event_id : event_id ,schedule_seq: schedule_seq ,lecture: lecture , userId: userId, scheduleId: scheduleId}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 안내글 list noticeList
        executeResults.noticeList = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/noticeList',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };





//신규 안내글 등록 하기 noticeInsertGo
        executeResults.noticeInsertGo = function (event_id,notice_comment) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/noticeInsertGo',
                    data: {event_id : event_id, notice_comment: notice_comment}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };





// 안내글 수정 하기 noticeModGo
        executeResults.noticeModGo = function (event_id,notice_comment,notice_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/noticeModGo',
                    data: {event_id : event_id, notice_comment: notice_comment, notice_ID: notice_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };







// 안내글 등록 삭제 버튼 noticeDeletgo
        executeResults.noticeDeletgo = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/noticeDeletgo',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




//행사 클릭시 강연자 list teacherList
        executeResults.teacherList = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/teacherList',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



//행사 클릭시 참가라 list entryList
        executeResults.entryList = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/entryList',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 강연자 신규 추가 등록 teacherInsert
        executeResults.teacherInsert = function (event_id,teacherName,teacherParty,teacherCall) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/teacherInsert',
                    data: {event_id : event_id, teacherName: teacherName, teacherParty: teacherParty, teacherCall: teacherCall}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


// 강연자 수정 등록 teacherMod
        executeResults.teacherMod = function (event_id,teacherName,teacherParty,teacherCall,teacherUserClassId,teacherUserId) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/teacherMod',
                    data: {event_id : event_id, teacherName: teacherName, teacherParty: teacherParty, teacherCall: teacherCall,
                        teacherUserClassId: teacherUserClassId, teacherUserId: teacherUserId}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


// 강연자 삭제 등록 teacherDelete
        executeResults.teacherDelete = function (event_id,teacherUserClassId,teacherUserId) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/teacherDelete',
                    data: {event_id : event_id, teacherUserClassId: teacherUserClassId, teacherUserId: teacherUserId}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 참가자 신규 추가 등록 entryInsert
        executeResults.entryInsert = function (event_id,teacherName,teacherParty,teacherCall) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/entryInsert',
                    data: {event_id : event_id, teacherName: teacherName, teacherParty: teacherParty, teacherCall: teacherCall}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 참가자 수정 등록 entryMod
        executeResults.entryMod = function (event_id,teacherName,teacherParty,teacherCall,teacherUserClassId,teacherUserId) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/entryMod',
                    data: {event_id : event_id, teacherName: teacherName, teacherParty: teacherParty, teacherCall: teacherCall,
                        teacherUserClassId: teacherUserClassId, teacherUserId: teacherUserId}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 참가자 삭제 등록 entryDelete
        executeResults.entryDelete = function (event_id,teacherUserClassId,teacherUserId) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/entryDelete',
                    data: {event_id : event_id, teacherUserClassId: teacherUserClassId, teacherUserId: teacherUserId}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 진행+지난 행사 클릭시  함수 cardList
        executeResults.cardList = function (event_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/cardList',
                    data: {event_id : event_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };





//카드 저장 누를시 cardMod
        executeResults.cardMod = function (event_id, user_class_id, user_id, user_name, user_party, nfc_id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/cardMod',
                    data: {event_id : event_id, user_class_id: user_class_id, user_id: user_id,
                        user_name: user_name, user_party: user_party ,nfc_id: nfc_id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };














































































































































































































































































































































































































































































// 강의 질문 등록 하기
        executeResults.insert_qna = function (event_ID,user_class_ID,user_ID,schedule_ID,write_qna,user_name,NFC_LID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/insert_qna',
                    data: {event_ID: event_ID , user_class_ID: user_class_ID , user_ID: user_ID , schedule_ID: schedule_ID, write_qna: write_qna, user_name: user_name, NFC_LID: NFC_LID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };





// 강의 질문 list
        executeResults.list_qna = function (event_ID,user_class_ID,user_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/list_qna',
                    data: {event_ID: event_ID , user_class_ID: user_class_ID , user_ID: user_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };







// 강의 질문 detail
        executeResults.detail_qna = function (event_ID,user_class_ID,user_ID,schedule_ID,QNA_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/detail_qna',
                    data: {event_ID: event_ID , user_class_ID: user_class_ID , user_ID: user_ID, schedule_ID: schedule_ID, QNA_ID: QNA_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };




// 강의 자료 list
        executeResults.lectureList = function (event_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/lectureList',
                    data: {event_ID: event_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };






// 강의 자료 detail
        executeResults.detail_lecture = function (lecture_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/detail_lecture',
                    data:{lecture_ID: lecture_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// 주변 정보 list

        executeResults.turisme = function (event_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/turisme',
                    data:{event_ID: event_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


//인사말,초대글,일정표 그림 출력
        executeResults.information = function (event_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/information',
                    data: {event_ID: event_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };



// top 움직이는 공지사항
        executeResults.notice_D = function (event_ID) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/notice_D',
                    data: {event_ID: event_ID}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };























        // 강의 목록 불러오기
    executeResults.getLectureList = function () {
        var deferred = $q.defer();

        $http({
                method: 'post',
                url: '/getLectureList'
            }
        ).success(function (data) {
                deferred.resolve(data.sending);
            }
        );
        return deferred.promise;
    };



    //이용기관 등록 관련
    executeResults.getUseComp = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getUseComp'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };

    executeResults.insertUseComp = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertUseComp',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.updateUseComp = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateUseComp',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.deleteUseComp = function (org_code) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteUseComp',
        data: {org_code: org_code}
      }).success(function (data) {
          deferred.resolve(data);

        }
      );
      return deferred.promise;
    };


    //소스 등록 관련
    executeResults.getSource = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getSource'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };

    executeResults.insertSource = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertSource',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.deleteSource = function (source_code) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteSource',
        data: {source_code: source_code}
      }).success(function (data) {
          deferred.resolve(data);

        }
      );
      return deferred.promise;
    };


    //타겟 등록 관련
    executeResults.getTarget = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getTarget'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };

    executeResults.insertTarget = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertTarget',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.updateTarget = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateTarget',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.deleteTarget = function (target_code) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteTarget',
        data: {target_code: target_code}
      }).success(function (data) {
          deferred.resolve(data);

        }
      );
      return deferred.promise;
    };

    //담당 등록 관련
    executeResults.getCompMem = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getCompMem'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.getDept = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getDept'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.insertOrgReg = function (data) {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/insertOrgReg',
          data:data
        }
      ).success(function () {
          deferred.resolve();
        }
      );
      return deferred.promise;
    };
    executeResults.deleteOrgReg = function (data) {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/deleteOrgReg',
          data:{org_code:data}
        }
      ).success(function () {
          deferred.resolve();
        }
      );
      return deferred.promise;
    };

    executeResults.insertPosReg = function (data) {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/insertPosReg',
          data:{pos_name:data}
        }
      ).success(function () {
          deferred.resolve();
        }
      );
      return deferred.promise;
    };
    executeResults.deletePosReg = function (data) {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/deletePosReg',
          data:{pos_code:data}
        }
      ).success(function () {
          deferred.resolve();
        }
      );
      return deferred.promise;
    };
    executeResults.getPosList = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getPosList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.insertDept = function (dep_name) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/insertDept',
        data: {dep_name: dep_name}
      }).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.insertRole = function (role_name) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/insertRole',
        data: {role_name: role_name}
      }).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };

    executeResults.getDepOne = function (dep_name) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getDepOne',
        data: {dep_name: dep_name}
      }).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.getRoleOne = function (role_name) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getRoleOne',
        data: {role_name: role_name}
      }).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };

    executeResults.insertCompMem = function (inputData) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/insertCompMem',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };
    executeResults.updateCompMem = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateCompMem',
        data: inputData

      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    };


    executeResults.deleteCompMem = function (mem_code) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteCompMem',
        data: {mem_code: mem_code}
      }).success(function (data) {
          deferred.resolve(data);

        }
      );
      return deferred.promise;
    };

    //임계치 기준정보관리 - 임계치 수신자 등록 - 명단
    executeResults.getReceiverNameList = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getReceiverNameList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
//시스템 등록 관련
    executeResults.getSysList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getSysList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };

//시스템 등록 관련 - 선택한 기관별 타겟 보여주기
    executeResults.getOrgTarget = function (inputData) {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getOrgTarget',
          data: inputData
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };



    //임계치 수신자 등록
    executeResults.selectReceiver = function (inputData) {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/selectReceiver',
          data: inputData
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    //임계치 수신자 등록

    executeResults.updateReceiver = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/insertReceiver'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };

    // 이용기관 사용 시스템 삭제
    executeResults.deleteSysReg = function (data) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteSysReg',
        data: data
      }).success(function (data) {
          deferred.resolve(data);

        }
      );
      return deferred.promise;
    };
    //시스템 등록 관련 - 신규 등록
    executeResults.insertSysReg = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertSysReg',
        data: {system_name:inputData}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.insertOrgReg = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertOrgReg',
        data: {org_name:inputData}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };
    executeResults.updateSysReg = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateSysReg',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };


    //액션코멘트 등록 관련
    executeResults.actList = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/actList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.actedList = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/actedList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.actData = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/actData'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };
    executeResults.updateAct = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateAct',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };
    executeResults.insertAct = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertAct',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };
    //액션리스트 등록
    executeResults.insertAction = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertAction',
        data: {action_name: inputData}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.updateAct = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateAct',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.deleteAct = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteAct',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);

        }
      );
      return deferred.promise;
    };

    executeResults.insertF = function (filess) {
      var deferred = $q.defer();
      var fname = '';
      var $file = filess[0];
      $upload.upload({
        url: '/uploadFile',
        file: $file,
        progress: function (e) {
        }
      }).then(function (data) {
        fname = data.data;
        deferred.resolve(fname);
      }, function (data) {
        alert(data.data);
      });

      ;
      return deferred.promise;
    };

    //채영범 사원원 TEST 프로그래밍
//        executeResults.insertStanRegItem = function (inputData) {
//            var deferred = $q.defer();
//
//            $http({
//                method: 'post',
//                url: '/insertStanRegItem',
//                data: inputData
//            }).success(function (data) {
//                    deferred.resolve(data);
//                }
//            );
//
//            return deferred.promise;
//        };
    executeResults.insertStanReg = function (inputData) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertStanReg',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    };


    //임계치 기준정보관리 - 임계치 관리항목등록 - 등록
    executeResults.insertStanThresReg = function (inputData) {
      var deferred = $q.defer();
//            console.log(inputData);
//            alert(inputData);
      $http({
        method: 'post',
        url: '/insertStanThresReg',
        data: {thrs_item_name: inputData}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    };
    //임계치 기준정보관리 - 임계치 관리항목등록 - 등록
    executeResults.insertStanQualReg = function (inputData) {
      var deferred = $q.defer();
//            console.log(inputData);
//            alert(inputData);
      $http({
        method: 'post',
        url: '/insertStanQualReg',
        data: {qual_item_name: inputData}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    };
    executeResults.getOccurDetailList = function (inputData) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getOccurDetailList',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data.sending);
        }
      );
      return deferred.promise;
    };

    //임계치 품질 액션 등록
    executeResults.getActionNameList = function () {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getActionNameList'
      }).success(function (data) {
          deferred.resolve(data.sending);

        }
      );
      return deferred.promise;
    };


    //임계치 기준정보 관리 -임계치 품질 상세 기준 항목 -저장 -insertDetail
    executeResults.insertDetail = function (thrs_item_code, qlt_code, detail_name, detail_value) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/insertDetail',
        data: {thrs_item_code: thrs_item_code, qlt_code: qlt_code, detail_name: detail_name, detail_value: detail_value}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };

    executeResults.updateActReg = function (thrs_item_code, qlt_code, action_code) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/updateActReg',
        data: {thrs_item_code: thrs_item_code, qlt_code: qlt_code, action_code: action_code}
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };


    executeResults.getQltClassList = function () {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getQltClassList'
      }).success(function (data) {
          deferred.resolve(data.sending);


        }
      );
      return deferred.promise;
    };

    executeResults.getOccurList = function () {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getOccurList'
      }).success(function (data) {
          deferred.resolve(data.sending);
   for (var i = 0; i < data.sending.length; i++) {
           console.log("getOccurList 데이터3" + i + " : " + data.sending[i].system_code + data.sending[i].qlt_code + data.sending[i].action_seq);
           }


        }
      );
      return deferred.promise;
    };


    executeResults.getOccurQltCnt = function () {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/getOccurQltCnt'
      }).success(function (data) {
          deferred.resolve(data.sending);

        }
      );
      return deferred.promise;
    };


    // 임계치 처리현황 - 임계치 처리현황 리스트
    executeResults.getProcessList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getProcessList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };

    // 임계치 처리현황 - 발생항목 코멘트 처리내역 리스트 get
    executeResults.getActionList = function (inputData) {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getActionList',
          data: inputData
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };
    // 임계치 처리현황 - 임계치 처리현황 리스트
    executeResults.getProcessList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getProcessList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };
    //임계치 관리 항목 삭제
    executeResults.deleteStanThresReg = function (index) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteStanThresReg',
        data: {thrs_item_code: index}
      }).success(function (data) {
          deferred.resolve(data.sending);

        }
      );
      return deferred.promise;
    };
    //임계치 class 삭제
    executeResults.deleteStanQualReg = function (index) {
      var deferred = $q.defer();

      $http({
        method: 'post',
        url: '/deleteStanQualReg',
        data: {qlt_code: index}
      }).success(function (data) {
          deferred.resolve(data.sending);

        }
      );
      return deferred.promise;
    };


    // 임계치 처리현황 - 임계치 처리현황 리스트
    executeResults.getProcessList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getProcessList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };
    //임계치 수신 체크 목록
    executeResults.getAddresseeList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getAddresseeList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
        }
      );

      return deferred.promise;
    };
    // 임계치 처리현황 - 임계치 처리현황 리스트


    executeResults.getStandardReg_ACT = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getStandardReg_ACT'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log(data)
        }
      );

      return deferred.promise;
    };


    executeResults.getStandardReg = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getStandardReg'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log(data)

        }
      );

      return deferred.promise;
    };
    //임계치 기준정보 관리-임계치 품질 등록-임계치 관리항목 리스트
    executeResults.getThresHoldList = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getThresHoldList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log(data)
        }
      );

      return deferred.promise;
    };
    //임계치 기준정보 관리-임계치 품질 등록-임계치 품질등급 리스트
    executeResults.getQualList = function () {
      var deferred = $q.defer();
      $http({
          method: 'post',
          url: '/getQualList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log(data)
        }
      );
      return deferred.promise;
    };

    //품질등급기준등록 삭제
    executeResults.deleteStanReg = function (inputData) {

      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/deleteStanReg',
        data: inputData

      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    };
    executeResults.updateStanReg = function (inputData) {

      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/updateStanReg',
        data: inputData

      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    }

    executeResults.deleteActionReg = function (inputData) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/deleteActionReg',
        data: inputData
      }).success(function (data) {
          deferred.resolve(data);
        }
      );

      return deferred.promise;
    };


    executeResults.getActionReg = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getActionReg'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log("getActionReg")
        }
      );
      return deferred.promise;
    };
    executeResults.getActionRegList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getActionRegList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending)
//                    console.log("getActionRegList")
        }
      );
      return deferred.promise;
    };
    executeResults.getDetailReg = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getDetailReg'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log("getDetailReg")
        }
      );
      return deferred.promise;
    };


    //수신자 등록
    executeResults.getUserList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getUserList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log("getDetailReg")
        }
      );
      return deferred.promise;
    };

    //log 삭제
    executeResults.deleteLog = function (inputdata1, inputdata2) {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/deleteLog',
          data: {start_date: inputdata1, end_date: inputdata2}
        }
      ).success(function (data) {
          deferred.resolve(data.sending);

        }
      );
      return deferred.promise;
    };

    //측정치 누적 현황 리스트
    executeResults.getLogList = function () {
      var deferred = $q.defer();

      $http({
          method: 'post',
          url: '/getLogList'
        }
      ).success(function (data) {
          deferred.resolve(data.sending);
//                    console.log("getDetailReg")
        }
      );
      return deferred.promise;
    };


    // 테스트용 쿼리 - 값 입력
    executeResults.insertTestPram = function (company_name, system_name, targetA_name, targetB_name, item_name, item_value) {
      var deferred = $q.defer();
      console.log("DB 서비스 확인" + company_name +
      system_name +
      targetA_name +
      targetB_name +
      item_name +
      item_value);
      $http({
        method: 'post',
        url: '/insertTestPram',
        data: {
          company_name: company_name,
          system_name: system_name,
          targetA_name: targetA_name,
          targetB_name: targetB_name,
          item_name: item_name,
          item_value: item_value
        }
      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };


    // 테스트용 쿼리 - 내부 로직 실행
    executeResults.logicTestPram = function (checkQlt, qltdatas) {
      var deferred = $q.defer();
      $http({
        method: 'post',
        url: '/logicTestPram',
        data: {checkQlt: checkQlt, qltdata: qltdatas}
,
         data: {company_name:company_name,system_name:system_name,source_name:source_name,target_name:target_name,item_name:item_name,item_value:item_value}

      }).success(function (data) {
          deferred.resolve(data);
        }
      );
      return deferred.promise;
    };


    return executeResults;
  });
