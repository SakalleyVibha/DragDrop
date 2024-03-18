import { Component } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { DndModule } from 'ngx-drag-drop';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop';
import { ResizableDirective } from '../resizable.directive';

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [DndModule, CommonModule, CdkDropList, CdkDrag, ResizableDirective],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css'
})

export class SettingPageComponent {

  finalSelected: any = {};
  value: any = []
  // pageNum: number | undefined;

  // draggable = {
  //   data: "myDragData",
  //   effectAllowed: "all",
  //   disable: false,
  //   handle: false
  // };

  imageSlider: any[] = ['81273', '81274', '81275']
  // {
  //   "id": 81273,
  //   "document_id": 147,
  //   "page_number": 1,
  //   "image": "https://dev-esign-assest.covetus.work/27/13c2ad8e-d380-41e1-8e55-723f556617a0/2024/3/e30f631c-84f1-4220-8023-cd1b535898f0/unsigned/images/147-unsigned0?AWSAccessKeyId=AKIAX2TJHSV2YJJNHKMZ&Expires=1710574319&Signature=rW47kdu2mpd4glb9ttNMu%2F1bgzU%3D",
  //   "signed_image": null,
  //   "status": 0,
  //   "envelope_key": "e30f631c-84f1-4220-8023-cd1b535898f0",
  //   "envelope_id": 3157,
  //   "size": "612x792",
  //   "created_at": "2024-03-15T03:31:06.383Z",
  //   "updated_at": null,
  //   "deleted": 0,
  //   "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire",
  //   dataQ: []
  // },
  // {
  //   "id": 81274,
  //   "document_id": 147,
  //   "page_number": 2,
  //   "image": "https://dev-esign-assest.covetus.work/27/13c2ad8e-d380-41e1-8e55-723f556617a0/2024/3/e30f631c-84f1-4220-8023-cd1b535898f0/unsigned/images/147-unsigned1?AWSAccessKeyId=AKIAX2TJHSV2YJJNHKMZ&Expires=1710574319&Signature=DivORsjhPrM40wcI1QOm2q38jwQ%3D",
  //   "signed_image": null,
  //   "status": 0,
  //   "envelope_key": "e30f631c-84f1-4220-8023-cd1b535898f0",
  //   "envelope_id": 3157,
  //   "size": "612x792",
  //   "created_at": "2024-03-15T03:31:06.383Z",
  //   "updated_at": null,
  //   "deleted": 0,
  //   "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire",
  //   dataQ: []
  // },
  // {
  //   "id": 81275,
  //   "document_id": 147,
  //   "page_number": 3,
  //   "image": "https://dev-esign-assest.covetus.work/27/13c2ad8e-d380-41e1-8e55-723f556617a0/2024/3/e30f631c-84f1-4220-8023-cd1b535898f0/unsigned/images/147-unsigned2?AWSAccessKeyId=AKIAX2TJHSV2YJJNHKMZ&Expires=1710574319&Signature=U1LnUVCzXM8B%2BBwAdpIR0LKTp3g%3D",
  //   "signed_image": null,
  //   "status": 0,
  //   "envelope_key": "e30f631c-84f1-4220-8023-cd1b535898f0",
  //   "envelope_id": 3157,
  //   "size": "612x792",
  //   "created_at": "2024-03-15T03:31:06.383Z",
  //   "updated_at": null,
  //   "deleted": 0,
  //   "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire",
  //   dataQ: []
  // }]

  currentIdx: number = 0;

  img: any[] = [
    {
      "id": 81273,
      "document_id": 147,
      "page_number": 1,
      "image": "https://dev-esign-assest.covetus.work/27/13c2ad8e-d380-41e1-8e55-723f556617a0/2024/3/e30f631c-84f1-4220-8023-cd1b535898f0/unsigned/images/147-unsigned0?AWSAccessKeyId=AKIAX2TJHSV2YJJNHKMZ&Expires=1710574319&Signature=rW47kdu2mpd4glb9ttNMu%2F1bgzU%3D",
      "signed_image": null,
      "status": 0,
      "envelope_key": "e30f631c-84f1-4220-8023-cd1b535898f0",
      "envelope_id": 3157,
      "size": "612x792",
      "created_at": "2024-03-15T03:31:06.383Z",
      "updated_at": null,
      "deleted": 0,
      "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire",
      dataQ: []
    },
    {
      "id": 81274,
      "document_id": 147,
      "page_number": 2,
      "image": "https://dev-esign-assest.covetus.work/27/13c2ad8e-d380-41e1-8e55-723f556617a0/2024/3/e30f631c-84f1-4220-8023-cd1b535898f0/unsigned/images/147-unsigned1?AWSAccessKeyId=AKIAX2TJHSV2YJJNHKMZ&Expires=1710574319&Signature=DivORsjhPrM40wcI1QOm2q38jwQ%3D",
      "signed_image": null,
      "status": 0,
      "envelope_key": "e30f631c-84f1-4220-8023-cd1b535898f0",
      "envelope_id": 3157,
      "size": "612x792",
      "created_at": "2024-03-15T03:31:06.383Z",
      "updated_at": null,
      "deleted": 0,
      "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire",
      dataQ: []
    },
    {
      "id": 81275,
      "document_id": 147,
      "page_number": 3,
      "image": "https://dev-esign-assest.covetus.work/27/13c2ad8e-d380-41e1-8e55-723f556617a0/2024/3/e30f631c-84f1-4220-8023-cd1b535898f0/unsigned/images/147-unsigned2?AWSAccessKeyId=AKIAX2TJHSV2YJJNHKMZ&Expires=1710574319&Signature=U1LnUVCzXM8B%2BBwAdpIR0LKTp3g%3D",
      "signed_image": null,
      "status": 0,
      "envelope_key": "e30f631c-84f1-4220-8023-cd1b535898f0",
      "envelope_id": 3157,
      "size": "612x792",
      "created_at": "2024-03-15T03:31:06.383Z",
      "updated_at": null,
      "deleted": 0,
      "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire",
      dataQ: []
    }]

  participant_arr: any[] = [
    {
      color: this.getColorRandom(),
      participnt: 'Signer 1'
    },
    {
      color: this.getColorRandom(),
      participnt: 'Signer 2'
    },
    {
      color: this.getColorRandom(),
      participnt: 'Signer 3'
    },
    {
      color: this.getColorRandom(),
      participnt: 'Signer 4'
    },
    {
      color: this.getColorRandom(),
      participnt: 'Signer 5'
    },
    {
      color: this.getColorRandom(),
      participnt: 'Signer 6'
    }
  ];


  questionList: any = ['62f27b06307cae2758292637', '62f27b06307cae2758292631', '62f27b06307cae275829d2637', '62f27b06307caee2758292631',
    '62f27sb06307cae2758292637', '62f27b06307fdcae2758292631', '62f27b06307caegfg275829d2637', '62f27b0630fg7caee2758292631']
  // questionList = [
  //   JSON.stringify({
  //     "MetaInfo": "[{\"value\":\"IF-ELSE\",\"type\":2,\"index\":\"0\",\"id\":\"18\",\"parameters\":[1,2,3],\"result\":[[1,2,8,5,6,7,14,4,3,9,10,12,11,13,21,22,23,24,25]]},{\"value\":\"Equal To\",\"type\":2,\"index\":\"1\",\"id\":\"11\",\"parameters\":[4,5],\"result\":[[1,2,8,5,6,7,14,4,3,9,10,12,11,13,21,22,23,24,25]]},{\"value\":\"13465 Midway Rd, Suite 204, Dallas, TX 75244\",\"type\":3,\"index\":\"2\",\"result\":[[1,2,8,5,6,7,14,4,3,9,10,12,11,13,21,22,23,24,25]]},{\"value\":\"13465 Midway Rd, Suite 204, Dallas, TX 75244\",\"type\":3,\"index\":\"3\",\"result\":[[1,2,8,5,6,7,14,4,3,9,10,12,11,13,21,22,23,24,25]]},{\"value\":\"Employer's Branch 2021\",\"type\":1,\"index\":\"4\",\"id\":\"594c9e8c36840d57b423b8ab\",\"result\":[[1,2,8,5,6,7,14,4,3,9,10,12,11,13,21,22,23,24,25]]},{\"value\":\"Dallas\",\"type\":3,\"index\":\"5\",\"result\":[[1,2,8,5,6,7,14,4,3,9,10,12,11,13,21,22,23,24,25]]}]",
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": null,
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": null,
  //     "FormName": null,
  //     "IsRequired": false,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": null,
  //     "GroupingType": 5,
  //     "QuestionGrouping": 5,
  //     "QuestionType": 0,
  //     "IsActive": true,
  //     "UniqueId": "59198d7236840d28e45d3224",
  //     "VersionNo": 11,
  //     "Name": "Employer's Address Variable 2021",
  //     "Description": "Employer's Business or Organization Address",
  //     "Weight": 1,
  //     "Id": "62f27b06307cae2758292637",
  //     "CreatedOn": "2024-03-08T03:57:24.8374018Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": "[{\"value\":\"Dallas\",\"type\":3,\"index\":\"0\"}]",
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": null,
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": null,
  //     "FormName": null,
  //     "IsRequired": false,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": null,
  //     "GroupingType": 5,
  //     "QuestionGrouping": 5,
  //     "QuestionType": 0,
  //     "IsActive": true,
  //     "UniqueId": "59198dc836840d28e45d36fd",
  //     "VersionNo": 4,
  //     "Name": "Employer's City Variable 2021",
  //     "Description": "Employer's City",
  //     "Weight": 1,
  //     "Id": "6094e50301931b04142ca497",
  //     "CreatedOn": "2024-03-08T03:57:24.8374018Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": "[{\"value\":\"TX\",\"type\":3,\"index\":\"0\"}]",
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": null,
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": null,
  //     "FormName": null,
  //     "IsRequired": false,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": null,
  //     "GroupingType": 5,
  //     "QuestionGrouping": 5,
  //     "QuestionType": 0,
  //     "IsActive": true,
  //     "UniqueId": "59198df036840d28e45d3bd8",
  //     "VersionNo": 4,
  //     "Name": "Employer's State Variable 2021",
  //     "Description": "Employer's State",
  //     "Weight": 1,
  //     "Id": "6094e51201931b04142caa89",
  //     "CreatedOn": "2024-03-08T03:57:24.8434384Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": "[{\"value\":\"75244\",\"type\":3,\"index\":\"0\"}]",
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": null,
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": null,
  //     "FormName": null,
  //     "IsRequired": false,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": null,
  //     "GroupingType": 5,
  //     "QuestionGrouping": 5,
  //     "QuestionType": 0,
  //     "IsActive": true,
  //     "UniqueId": "59198e1636840d28e45d40b5",
  //     "VersionNo": 4,
  //     "Name": "Employer's Zip Code Variable 2021",
  //     "Description": "Employer's Zip Code",
  //     "Weight": 1,
  //     "Id": "6094e52501931b04142cb07b",
  //     "CreatedOn": "2024-03-08T03:57:24.8434384Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": null,
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": "5996072236840d53b8a38553",
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": "                                                        <h2>(1) Answer the questions. (2) Review the forms. (3) Sign electronically. </h2>\n\n<ul>\n\t<li>\n\t<h3>When finished with each page, hit Next. </h3>\n\t</li>\n\t<li>\n\t<h3>If you see a red error message, please correct the error. You cannot submit your packet if there are errors.</h3>\n\t</li>\n\t<li>\n\t<h3>Answer ALL required questions.</h3>\n\t</li>\n\t<li>\n\t<h3>When finished with your data input, click Sign.</h3>\n\t</li>\n</ul>\n\n                        \n                        ",
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": null,
  //     "FormName": null,
  //     "IsRequired": true,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": [],
  //     "GroupingType": 4,
  //     "QuestionGrouping": 4,
  //     "QuestionType": 0,
  //     "IsActive": true,
  //     "UniqueId": "59b124f536840d490896e969",
  //     "VersionNo": 13,
  //     "Name": "Instructions Packet",
  //     "Description": "Instrucciones\n(1) Responda a las preguntas. (2) Revise los formularios. (3) Firme electrónicamente\nCuando termine con cada página, seleccione \"Next\".\nSi aparece un mensaje de error en rojo, corríjalo. No puede enviar su paquete si hay errores.\nResponda a TODAS las preguntas requeridas.\nCuando haya terminado de introducir todos los datos, seleccione \"Sign\".\n",
  //     "Weight": 2,
  //     "Id": "64012851307cae291c49c9d0",
  //     "CreatedOn": "2023-03-02T16:50:57.0830000Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": null,
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": "5996072236840d53b8a38553",
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": " RPMX Construction",
  //     "FormName": null,
  //     "IsRequired": true,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": [],
  //     "GroupingType": 1,
  //     "QuestionGrouping": 1,
  //     "QuestionType": 14,
  //     "IsActive": true,
  //     "UniqueId": "6050983401931b20f03a6c3e",
  //     "VersionNo": 1,
  //     "Name": "client from sendout screen hidden question 2021",
  //     "Description": "client from sendout screen hidden question 2021",
  //     "Weight": 9,
  //     "Id": "6050983401931b20f03a6c3f",
  //     "CreatedOn": "2021-03-16T05:36:20.2500000Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": null,
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": "5996072236840d53b8a38553",
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": "TX",
  //     "FormName": null,
  //     "IsRequired": true,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": [],
  //     "GroupingType": 1,
  //     "QuestionGrouping": 1,
  //     "QuestionType": 14,
  //     "IsActive": true,
  //     "UniqueId": "6050bb8d01931b1e2c317cc3",
  //     "VersionNo": 1,
  //     "Name": "Work site from NHP sendout screen hidden question 2021",
  //     "Description": "Work site from NHP sendout screen hidden question 2021",
  //     "Weight": 10,
  //     "Id": "6050bb8d01931b1e2c317cc4",
  //     "CreatedOn": "2021-03-16T08:07:09.5870000Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": null,
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": "5996072236840d53b8a38553",
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": "HR",
  //     "FormName": null,
  //     "IsRequired": true,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": [],
  //     "GroupingType": 1,
  //     "QuestionGrouping": 1,
  //     "QuestionType": 14,
  //     "IsActive": true,
  //     "UniqueId": "6050bbb201931b1e2c318f4c",
  //     "VersionNo": 1,
  //     "Name": "Department from NHP sendout screen hidden question 2021",
  //     "Description": "Department from NHP sendout screen hidden question 2021",
  //     "Weight": 11,
  //     "Id": "6050bbb201931b1e2c318f4d",
  //     "CreatedOn": "2021-03-16T08:07:46.0660000Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": null,
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": "5996072236840d53b8a38553",
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": "Gabriella ",
  //     "FormName": null,
  //     "IsRequired": true,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": [],
  //     "GroupingType": 1,
  //     "QuestionGrouping": 1,
  //     "QuestionType": 14,
  //     "IsActive": true,
  //     "UniqueId": "6050bbce01931b1e2c31a1d7",
  //     "VersionNo": 1,
  //     "Name": "Hiring Manager from NHP sendout screen hidden question 2021",
  //     "Description": "Hiring Manager from NHP sendout screen hidden question 2021",
  //     "Weight": 12,
  //     "Id": "6050bbce01931b1e2c31a1d8",
  //     "CreatedOn": "2021-03-16T08:08:14.1210000Z",
  //     "CreatedById": null
  //   }),
  //   JSON.stringify({
  //     "MetaInfo": null,
  //     "QuestionTypeName": null,
  //     "QuestionList": null,
  //     "CategoryId": "5996072236840d53b8a38553",
  //     "Category": "Instructions",
  //     "CategoryWeight": 0,
  //     "FieldCategory": {
  //       "IsActive": true,
  //       "UniqueId": "5996072236840d53b8a38553",
  //       "VersionNo": 1,
  //       "Name": "Instructions",
  //       "Description": "Instructions on how to navigate each section",
  //       "Weight": 1,
  //       "Id": "5996072236840d53b8a38554",
  //       "CreatedOn": "2017-08-17T21:14:10.1680000Z",
  //       "CreatedById": null
  //     },
  //     "QuestionCategory": null,
  //     "IsMultiple": false,
  //     "Message": null,
  //     "Questions": null,
  //     "PacketName": null,
  //     "DataImportFieldName": null,
  //     "ShowDefault": false,
  //     "DefaultValue": null,
  //     "Value": "Accounting",
  //     "FormName": null,
  //     "IsRequired": true,
  //     "IsDoubleEntry": false,
  //     "MinValidation": null,
  //     "MaxValidation": null,
  //     "IsCustom": false,
  //     "Width": 100,
  //     "Height": 20,
  //     "SubOptions": [],
  //     "GroupingType": 1,
  //     "QuestionGrouping": 1,
  //     "QuestionType": 14,
  //     "IsActive": true,
  //     "UniqueId": "6050bbe201931b1e2c31b464",
  //     "VersionNo": 1,
  //     "Name": "Job position from NHP sendout screen hidden question 2021",
  //     "Description": "Job position from NHP sendout screen hidden question 2021",
  //     "Weight": 13,
  //     "Id": "6050bbe201931b1e2c31b465",
  //     "CreatedOn": "2021-03-16T08:08:34.6670000Z",
  //     "CreatedById": null
  //   })
  // ]


  ngOnInit() {
    console.log('questionList: ', this.questionList);
  }


  connectedList: any = ['Question_1', 'Question_2', 'Question_3']
  connectedLis2: any = ['test', 'test2', 'test3']

  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  basket = ['Oranges', 'Bananas', 'Cucumbers'];

  getColorRandom() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Format the RGB values into a hexadecimal color code
    let colorCode = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    return colorCode;
  }

  selectedParticipant(i: number) {
    this.finalSelected = this.participant_arr[i];
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  // drop(event: CdkDragDrop<string[]>) {
  //   console.log('event: ', event);
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }

  drop(event: CdkDragDrop<string[]>, data: any, i: number) {
    console.log('i: ', i);
    console.log('data: ', data);
    console.log('event: ', event, event.previousContainer, event.container);
    console.log('event: ', event.dropPoint);

    let div = document.getElementById('drop-zone');
    if (div) {

      let rect = div.getBoundingClientRect();
      let divX = rect.left;
      console.log('divX: ', divX);
      let divY = rect.top;
      console.log('divY: ', divY);

      // Calculate the coordinates relative to the div
      let relativeX = event.dropPoint.x - divX;
      let relativeY = event.dropPoint.y - divY;

      // Log the coordinates
      console.log("X Coordinate (relative to div): " + relativeX);
      console.log("Y Coordinate (relative to div): " + relativeY);
      this.value.push({
        x: relativeX,
        y: relativeY,
        quesId: data,
        participantId: this.finalSelected.participnt,
        colorId: this.finalSelected.color,
        pageNumber: this.currentIdx + 1
      })
    }
    // Get the position of the div relative to the screen
    // if (i != 100) {

    // this.img[i].push({ value: i });
    // }
    // if (event.previousContainer !== event.container) {

    // }
    console.log('this.value: ', this.value);
  }

  nextImg(key: boolean) {
    if (key == true) {
      this.currentIdx += 1;
    } else {
      this.currentIdx -= 1;
    }
  }

  onDragEnded(event: any, i: number) {
    console.log('event: ', event);
    console.log(this.value[i]);
    // this.value[i]['y'] = event.dropPoint.y;
    console.log('this.value[i][y]: ', this.value[i]['y']);
    console.log('event.dropPoint.y: ', event.dropPoint.y);
    // this.value[i]['x'] = event.dropPoint.x;
    console.log('this.value[i][x]: ', this.value[i]['x']);
    console.log('event.dropPoint.x: ', event.dropPoint.x);
    console.log(this.value[i]);
    let div = document.getElementById('drop-zone');
    if (div) {

      let rect = div.getBoundingClientRect();
      let divX = rect.left;
      console.log('divX: ', divX);
      let divY = rect.top;
      console.log('divY: ', divY);

      // Calculate the coordinates relative to the div
      let relativeX = event.dropPoint.x - divX;
      let relativeY = event.dropPoint.y - divY;

      // Log the coordinates
      console.log("X Coordinate (relative to div): " + relativeX);
      console.log("Y Coordinate (relative to div): " + relativeY);
      this.value[i].x = relativeX;
      this.value[i].y = relativeY;
    }
  }

}



