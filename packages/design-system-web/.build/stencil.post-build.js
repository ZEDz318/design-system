let fs = require('fs')

const paths = [
    '/../src/components.d.ts', 
    '/../dist/types/components.d.ts'
]

const clue = 'declare namespace LocalJSX {';

const toreplace_import = `import { JSX as IonJSX } from '@ionic/core';

`
const toreplace_content = `
${clue}
    export interface IonIcon extends IonJSX.IonIcon { }
    export interface IonButton extends IonJSX.IonButton { }
    export interface IonAccordion extends IonJSX.IonAccordion { }
    export interface IonAccordionGroup extends IonJSX.IonAccordionGroup { }
    export interface IonActionSheet extends IonJSX.IonActionSheet { }
    export interface IonAlert extends IonJSX.IonAlert { }
    export interface IonApp extends IonJSX.IonApp { }
    export interface IonAvatar extends IonJSX.IonAvatar { }
    export interface IonBackButton extends IonJSX.IonBackButton { }
    export interface IonBackdrop extends IonJSX.IonBackdrop { }
    export interface IonBadge extends IonJSX.IonBadge { }
    export interface IonBreadcrumb extends IonJSX.IonBreadcrumb { }
    export interface IonBreadcrumbs extends IonJSX.IonBreadcrumbs { }
    export interface IonButton extends IonJSX.IonButton { }
    export interface IonButtons extends IonJSX.IonButtons { }
    export interface IonCard extends IonJSX.IonCard { }
    export interface IonCardContent extends IonJSX.IonCardContent { }
    export interface IonCardHeader extends IonJSX.IonCardHeader { }
    export interface IonCardSubtitle extends IonJSX.IonCardSubtitle { }
    export interface IonCardTitle extends IonJSX.IonCardTitle { }
    export interface IonCheckbox extends IonJSX.IonCheckbox { }
    export interface IonChip extends IonJSX.IonChip { }
    export interface IonCol extends IonJSX.IonCol { }
    export interface IonContent extends IonJSX.IonContent { }
    export interface IonDatetime extends IonJSX.IonDatetime { }
    export interface IonFab extends IonJSX.IonFab { }
    export interface IonFabButton extends IonJSX.IonFabButton { }
    export interface IonFabList extends IonJSX.IonFabList { }
    export interface IonFooter extends IonJSX.IonFooter { }
    export interface IonGrid extends IonJSX.IonGrid { }
    export interface IonHeader extends IonJSX.IonHeader { }
    export interface IonImg extends IonJSX.IonImg { }
    export interface IonInfiniteScroll extends IonJSX.IonInfiniteScroll { }
    export interface IonInfiniteScrollContent extends IonJSX.IonInfiniteScrollContent { }
    export interface IonInput extends IonJSX.IonInput { }
    export interface IonItem extends IonJSX.IonItem { }
    export interface IonItemDivider extends IonJSX.IonItemDivider { }
    export interface IonItemGroup extends IonJSX.IonItemGroup { }
    export interface IonItemOption extends IonJSX.IonItemOption { }
    export interface IonItemOptions extends IonJSX.IonItemOptions { }
    export interface IonItemSliding extends IonJSX.IonItemSliding { }
    export interface IonLabel extends IonJSX.IonLabel { }
    export interface IonList extends IonJSX.IonList { }
    export interface IonListHeader extends IonJSX.IonListHeader { }
    export interface IonLoading extends IonJSX.IonLoading { }
    export interface IonMenu extends IonJSX.IonMenu { }
    export interface IonMenuButton extends IonJSX.IonMenuButton { }
    export interface IonMenuToggle extends IonJSX.IonMenuToggle { }
    export interface IonModal extends IonJSX.IonModal { }
    export interface IonNav extends IonJSX.IonNav { }
    export interface IonNavLink extends IonJSX.IonNavLink { }
    export interface IonNote extends IonJSX.IonNote { }
    export interface IonPicker extends IonJSX.IonPicker { }
    export interface IonPickerColumn extends IonJSX.IonPickerColumn { }
    export interface IonPickerColumnInternal extends IonJSX.IonPickerColumnInternal { }
    export interface IonPickerInternal extends IonJSX.IonPickerInternal { }
    export interface IonPopover extends IonJSX.IonPopover { }
    export interface IonProgressBar extends IonJSX.IonProgressBar { }
    export interface IonRadio extends IonJSX.IonRadio { }
    export interface IonRadioGroup extends IonJSX.IonRadioGroup { }
    export interface IonRange extends IonJSX.IonRange { }
    export interface IonRefresher extends IonJSX.IonRefresher { }
    export interface IonRefresherContent extends IonJSX.IonRefresherContent { }
    export interface IonReorder extends IonJSX.IonReorder { }
    export interface IonReorderGroup extends IonJSX.IonReorderGroup { }
    export interface IonRippleEffect extends IonJSX.IonRippleEffect { }
    export interface IonRoute extends IonJSX.IonRoute { }
    export interface IonRouteRedirect extends IonJSX.IonRouteRedirect { }
    export interface IonRouter extends IonJSX.IonRouter { }
    export interface IonRouterLink extends IonJSX.IonRouterLink { }
    export interface IonRouterOutlet extends IonJSX.IonRouterOutlet { }
    export interface IonRow extends IonJSX.IonRow { }
    export interface IonSearchbar extends IonJSX.IonSearchbar { }
    export interface IonSegment extends IonJSX.IonSegment { }
    export interface IonSegmentButton extends IonJSX.IonSegmentButton { }
    export interface IonSelect extends IonJSX.IonSelect { }
    export interface IonSelectOption extends IonJSX.IonSelectOption { }
    export interface IonSelectPopover extends IonJSX.IonSelectPopover { }
    export interface IonSkeletonText extends IonJSX.IonSkeletonText { }
    export interface IonSlide extends IonJSX.IonSlide { }
    export interface IonSlides extends IonJSX.IonSlides { }
    export interface IonSpinner extends IonJSX.IonSpinner { }
    export interface IonSplitPane extends IonJSX.IonSplitPane { }
    export interface IonTab extends IonJSX.IonTab { }
    export interface IonTabBar extends IonJSX.IonTabBar { }
    export interface IonTabButton extends IonJSX.IonTabButton { }
    export interface IonTabs extends IonJSX.IonTabs { }
    export interface IonText extends IonJSX.IonText { }
    export interface IonTextarea extends IonJSX.IonTextarea { }
    export interface IonThumbnail extends IonJSX.IonThumbnail { }
    export interface IonTitle extends IonJSX.IonTitle { }
    export interface IonToast extends IonJSX.IonToast { }
    export interface IonToggle extends IonJSX.IonToggle { }
    export interface IonToolbar extends IonJSX.IonToolbar { }
    export interface IonVirtualScroll extends IonJSX.IonVirtualScroll { }
`


for (let path_ of paths) {
    const path = __dirname + path_

    let content = fs.readFileSync(path, 'utf-8');
    content = toreplace_import + content.replace(clue, toreplace_content)

    if(fs.existsSync(path)) fs.unlinkSync(path)
    fs.writeFileSync(path, content, 'utf-8');

    console.log('> Wrote in ' + path_)
}