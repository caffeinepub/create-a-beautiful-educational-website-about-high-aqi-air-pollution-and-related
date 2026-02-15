import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Iter "mo:core/Iter";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";


actor {
  public type ChangeRequest = {
    content : Text;
    submittedBy : Principal;
    submittedTime : Time.Time;
    reviewed : Bool;
    accepted : Bool;
  };

  public type ChangeRequestInput = {
    content : Text;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  var nextChangeRequestId = 0;
  let changeRequestIdKeyValue = Map.empty<Nat, ChangeRequest>();

  public shared ({ caller }) func submitChangeRequest(input : ChangeRequestInput) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can submit change requests");
    };

    let newChangeRequest : ChangeRequest = {
      input with
      submittedBy = caller;
      submittedTime = Time.now();
      reviewed = false;
      accepted = false;
    };

    changeRequestIdKeyValue.add(nextChangeRequestId, newChangeRequest);
    nextChangeRequestId += 1;
  };

  public query ({ caller }) func getAll() : async [ChangeRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all change requests");
    };
    changeRequestIdKeyValue.values().toArray();
  };

  public shared ({ caller }) func markReviewed(id : Nat, accepted : Bool) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can review change requests");
    };

    switch (changeRequestIdKeyValue.get(id)) {
      case (null) {
        Runtime.trap("Change request not found");
      };
      case (?request) {
        let updatedRequest = {
          request with
          reviewed = true;
          accepted;
        };
        changeRequestIdKeyValue.add(id, updatedRequest);
      };
    };
  };
};
