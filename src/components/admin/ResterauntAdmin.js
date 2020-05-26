import React from 'react';
import { Filter,Create,SimpleForm,ReferenceInput,SelectInput,List, Datagrid, TextField,TextInput, ReferenceField, EditButton, EmailField,ImageField,ImageInput } from 'react-admin';

export const ResList = props => (
    <List filters={<ResFilter />}  {...props}>
        <Datagrid>
        <TextField source="res_id" />
      <TextField source="res_name" />
      <EmailField source="res_opcl" />
      <TextField source="res_rate" />
      <TextField source="res_place" />
      <TextField source="res_tel" />
      <ImageField source="res_img"/>
      <div>
    <img src="cat.png" title="meow" />
        </div>

            <EditButton />
        </Datagrid>
    </List>
);

export const ResCreate = props => (
    <Create {...props}>
        <SimpleForm>
      <TextInput source="res_id"  />
      <TextInput source="res_name"/>
      <TextInput source="res_opcl" />
      <TextInput source="res_rate" />
      <TextInput source="res_place"/>
      <TextInput source="res_tel" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
    <ImageField source="src" title="title" />
        </ImageInput>

        </SimpleForm>
    </Create>
);

export const ResFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Res" source="res_id" reference="ResterauntAdmin" allowEmpty>
            <SelectInput optionText="res_name " />
        </ReferenceInput>
    </Filter>
);
