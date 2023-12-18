"use client";
import Image from "next/image";
import React, { ChangeEvent, DragEvent, useState } from "react";
import { Card } from "./";
import { AddStockCard, CustomLink } from "@/common";
import Papa from "papaparse";
import { useStore } from "@/models/root.store";

export const LoadStock = function () {

  const {aside: {context} } = useStore()

  type CsvInfo = {
    title: string;
    file: string;
    currentDate: string;
  };

  const EMPTY_FILE_INFO = {
    title: "",
    file: "",
    currentDate: "",
  } as const;

  const [csvInfo, setCsvInfo] = useState<CsvInfo>(EMPTY_FILE_INFO);

  const handleDeleteCard = () => {
    setCsvInfo(EMPTY_FILE_INFO);
  };

  const { title, file, currentDate } = csvInfo;

  const postCsvToDatabase = (csvData: any) => { //add type 
    const apiUrl = context === 'my-team' ? '/api/my-team/upload' : '/api/my-stock/upload';
    
    // logs to test context 
    if (context === 'my-team') {
      console.log("Estamos en my-team");
    } else if (context === 'my-stock') {
      console.log("Estamos en my-stock");
    }

    // post csv to db
    console.log(`Posting to ${apiUrl}`, csvData);
  };

  const onFileChangeHandler = (csvFile: File) => {
    Papa.parse(csvFile, {
      skipEmptyLines: true, //Delete empty fields
      header: true,     //Parse CSV to JSON
      complete: function (results) {
        const { name, size } = csvFile;
        setCsvInfo({
          title: name,
          file: `${(size / 1024).toFixed(2)}kb`,
          currentDate: new Date().toLocaleString(),
        });
       // console.log("Data:", results.data); //<- log for check data file
       //postCsvToDatabase(results.data);
      },
    });
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      const csvFile = event.dataTransfer.files[0];
      onFileChangeHandler(csvFile);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const csvFile = event.target.files[0];
      onFileChangeHandler(csvFile);
    }
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="drop-area">
      <div className="flex flex-col gap-6">
        <Card className="border-dashed border h-60 flex flex-col gap-4 justify-center">
          <Image
            alt="folder icon"
            src="/svg/folder.svg"
            width={84}
            height={88}
            className="mt-[-20px]"
          />

          <p>Drag and drop your CSV file here or</p>
          <label
            htmlFor="csvFileSelector"
            className="cursor-pointer text-blue-500"
          >
            <h2 className="text-blue font-lg font-bold font-sans">
              Select a File
            </h2>
          </label>

          <input
            type="file"
            id="csvFileSelector"
            accept=".csv"
            className="hidden"
            onChange={handleFileSelect}
          />
        </Card>
        {csvInfo.title && (
          <AddStockCard
            title={title}
            file={file}
            currentDate={currentDate}
            onDeleteClick={handleDeleteCard}
          />
        )}
      </div>

      <div className="fixed bottom-5 w-[85%] flex">
       {/* Here post data to db  */}
        <CustomLink
          href="/home/my-team/data"
          className="rounded-md flex-grow text-center"
          variant="primary"
          size="big"
        >
          Attach File
        </CustomLink>
      </div>
    </div>
  );
};
