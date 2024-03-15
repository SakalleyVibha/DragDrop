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
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [DndModule, CommonModule, CdkDropList, CdkDrag],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css'
})
export class SettingPageComponent {

  finalSelected: any = {};
  value: any[] = []
  pageNum: number | undefined;

  draggable = {
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };

  imageSlider: any[] = [{
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
    "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire"
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
    "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire"
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
    "DocumentName": "I-9 Form 2021 - (Do not use preparer and no remote) No Rehire"
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

  questionList = [
    "62f27b06307cae2758292637",
    "6094e50301931b04142ca497", "6094e51201931b04142caa89", "6094e52501931b04142cb07b"]

  onDragEnd(event: DragEvent, ques: any) {
    console.log('ques: ', ques);
    console.log('event: ', event);
    let finalObj = {
      colorId: this.finalSelected.color,
      quesId: ques.Id,
      participantId: this.finalSelected.participnt,
      pageNo: this.pageNum
    }
    console.log('finalObj: ', finalObj);

    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, i: number) {
    this.pageNum = i + 1;
  }

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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
