/*
*   Background script to run as part of a ServiceNow Go Live
*   to reset number counters back to OOB default.
*/
var defaultNumbers = {
    "ecc_agent": "0",
    "scan_result": "0",
    "sys_embedded_tour_guide": "0",
    "pa_indicators": "0",
    "mid_k8s_deployment": "0",
    "sla_repair_log": "0",
    "awa_queue": "0",
    "pa_breakdowns": "0",
    "ts_index_name": "0",
    "sys_watermark": "0",
    "mid_server_deployment": "0",
    "mid_server_profile": "0",
    "interaction": "1",
    "sys_template": "1",
    "sn_apptmnt_booking_lock": "100",
    "alm_transfer_order_line_subtask": "1000",
    "vtb_task": "1000",
    "sn_wsd_core_workplace_request": "1000",
    "incident_alert": "1000",
    "cmdb_ci_service": "1000",
    "sn_wsd_core_building": "1000",
    "sc_ic_category_request": "1000",
    "sn_wsd_core_shift": "1000",
    "sn_wsd_core_floor": "1000",
    "sn_wsd_core_campus": "1000",
    "sn_wsd_rsv_reservation": "1000",
    "sn_wsd_core_reservation": "1000",
    "roster_schedule_span_proposal": "1000",
    "cmdb_multisource_recomp_task": "1000",
    "alm_transfer_order_line_task": "1000",
    "cmdb_ci_business_app": "1000",
    "stale_ci_remediation": "1000",
    "sn_wsd_core_workplace_task": "1000",
    "wu_appointment": "1000",
    "sn_hr_core_task": "1000",
    "gsw_task": "1000",
    "scan_mute_rule": "1000",
    "business_unit_strategy": "1000",
    "recommended_field_remediation": "1000",
    "sn_hr_core_bulk_case_user_segment_group": "1000",
    "analytics_task": "1000",
    "asset_job_log_detail": "1000",
    "sn_gf_strategy": "1000",
    "sys_atf_test_suite_result": "1000",
    "sn_wsd_core_site": "1000",
    "std_change_proposal": "1000",
    "scan_task": "1000",
    "sys_report_access_request": "1000",
    "sn_publications_publication": "1000",
    "sn_wsd_core_area": "1000",
    "sys_import_set_execution": "1000",
    "incident_alert_task": "1000",
    "sn_wsd_core_workplace_location": "1000",
    "scan_combo": "1000",
    "sn_employee_profile": "1000",
    "task_activity": "1000",
    "asset_job_log": "1000",
    "sn_apptmnt_booking_appointment_booking": "1000",
    "sn_hr_core_bulk_case_creation_run": "1000",
    "notify_conference_call": "1000",
    "cmdb_ci_service_auto": "1000",
    "cert_audit_result": "1000",
    "cert_template": "1000",
    "sn_hr_core_reminder": "1000",
    "kb_feedback_task": "1000",
    "sn_wsd_core_room": "1000",
    "cert_audit": "1000",
    "clone_instance": "1000",
    "automation_status_set": "1000",
    "catalog_category_request": "1000",
    "sc_script_order_guide_failure": "1000",
    "sn_hr_core_profile": "1000",
    "sys_multi_import_set": "1000",
    "sys_execution_context": "1000",
    "sn_hr_core_bulk_case_request": "1000",
    "asset_reclamation_request": "1000",
    "orphan_ci_remediation": "1000",
    "comm_plan": "1000",
    "enterprise_strategy": "1000",
    "sys_rollback_context": "1000",
    "sn_wsd_core_region": "1000",
    "reconcile_duplicate_task": "1000",
    "sn_cd_task": "1000",
    "required_field_remediation": "1000",
    "sn_wsd_core_qr": "1000",
    "cmdb_data_management_task": "1000",
    "cmdb_ci_outage": "1000",
    "sn_bm_client_recommendation": "1000",
    "sys_app_license_defn": "1000",
    "comm_task": "1000",
    "pwd_reset_request": "1000",
    "sn_wsd_core_block_location": "1000",
    "sys_concurrent_import_set_job": "1000",
    "sn_hr_core_case": "1000",
    "sn_wsd_core_planned_task_def": "1000",
    "sys_update_cm": "1001",
    "sc_req_item": "10000",
    "sla": "10000",
    "asmt_assessment_instance": "10000",
    "sys_import_set": "10000",
    "sc_request": "10000",
    "ola": "10000",
    "change_task": "10000",
    "sys_product_help": "10000",
    "kb_external_job_run": "10000",
    "fm_expense_line": "10000",
    "ast_license_symantec": "10000",
    "sysapproval_group": "10000",
    "kb_submission": "10000",
    "kb_knowledge": "10000",
    "sc_task": "10000",
    "chat_queue_entry": "10000",
    "asmt_assessment": "10000",
    "incident": "10000",
    "sys_report_summary": "10000",
    "asmt_template": "10000",
    "cert_filter": "10000",
    "sn_wsd_core_space": "10000",
    "ast_license_msft": "10000",
    "ast_warranty": "10000",
    "ast_service": "10000",
    "ast_contract": "10000",
    "discovery_status": "10000",
    "ast_license_generic": "10000",
    "kb_knowledge_block": "10000",
    "alm_transfer_order": "10000",
    "clm_terms_and_conditions": "10000",
    "sys_export_set_run": "10000",
    "release_feature": "10000",
    "release_product": "10000",
    "release_phase": "10000",
    "dsl": "10000",
    "sys_concurrent_import_set": "10000",
    "release_project": "10000",
    "kb_external_handler_run": "10000",
    "ast_license_adobe": "10000",
    "problem_task": "10000",
    "asset_task": "10000",
    "ticket": "10000",
    "alm_transfer_order_line": "10000",
    "release_task": "10000",
    "dms_document": "10002",
    "metric_definition": "10002",
    "task": "20000",
    "sc_cat_item_service": "20000",
    "change_phase": "30000",
    "change_request": "30000",
    "problem": "40000",
    "upgrade_history_task": "40000",
    "kb_article_checklist_summary": "100000",
};

for (var i in defaultNumbers) {
    var numGr = new GlideRecord('sys_number_counter');
    numGr.addEncodedQuery('table=' + i);
    numGr.query();
    try {
        if (numGr.next()) {
            numGr.number = defaultNumbers[i];
            numGr.update();
            gs.print('Table ' + i + ' count reset');
        }
    } catch (error) {
        gs.print("Error: Failed to reset counters!\n" + error);
    }

}